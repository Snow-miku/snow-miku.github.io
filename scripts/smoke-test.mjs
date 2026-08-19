/**
 * Smoke test: serves ./dist the way GitHub Pages does, opens it in a real
 * browser, and fails if the app did not actually render.
 *
 * This is the check that would have caught the "pushed but the site is blank"
 * bug: `tsc` and `vite build` both pass happily while the page renders nothing.
 */
import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { chromium } from 'playwright'

const DIST = path.resolve(import.meta.dirname, '../dist')
const ROUTES = ['/', '/gallery', '/resume', '/case-study', '/about']
const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.json': 'application/json', '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
}

if (!existsSync(DIST)) {
  console.error('✗ dist/ not found — run `pnpm run build` first')
  process.exit(1)
}

// Mimic GitHub Pages: static files, 404.html for anything unmatched.
const server = createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost')
  const filePath = path.join(DIST, url.pathname)
  const candidates = [filePath, path.join(filePath, 'index.html')]
  for (const c of candidates) {
    if (existsSync(c) && !c.endsWith('/')) {
      try {
        const body = await readFile(c)
        res.writeHead(200, { 'Content-Type': MIME[path.extname(c)] ?? 'application/octet-stream' })
        return res.end(body)
      } catch { /* fall through */ }
    }
  }
  res.writeHead(404, { 'Content-Type': 'text/html' })
  res.end(await readFile(path.join(DIST, '404.html')))
})

await new Promise((r) => server.listen(0, r))
const base = `http://localhost:${server.address().port}`

// CI runs `playwright install chromium`. Sandboxes that ship their own build
// can point at it with SMOKE_CHROMIUM_PATH instead.
const launchOpts = process.env.SMOKE_CHROMIUM_PATH
  ? { executablePath: process.env.SMOKE_CHROMIUM_PATH, args: ['--no-sandbox'] }
  : {}
const browser = await chromium.launch(launchOpts)
const failures = []
const warnings = []

for (const route of ROUTES) {
  const page = await browser.newPage()

  // Real JS exceptions — these always mean something is broken.
  const jsErrors = []
  page.on('pageerror', (e) => jsErrors.push(String(e).split('\n')[0]))

  // Broken requests, but only for assets WE ship. External resources (Google
  // Fonts, analytics) are ignored: they fail in sandboxed/offline CI and that
  // says nothing about whether our build is healthy.
  //
  // Scripts and stylesheets are hard failures — if those 404 the site is dead.
  // Images are warnings: a missing picture is a content gap, not a reason to
  // block a dependency upgrade.
  const brokenCode = []
  const brokenMedia = []
  const isOurs = (url) => url.startsWith(base)
  const bucket = (type) => (['script', 'stylesheet', 'document', 'fetch', 'xhr'].includes(type) ? brokenCode : brokenMedia)
  page.on('response', (r) => {
    // GitHub Pages answers unknown SPA routes with 404.html and an HTTP 404.
    // That is the intended behaviour, not a broken asset.
    const isNavigation = r.request().isNavigationRequest()
    if (isOurs(r.url()) && r.status() >= 400 && !isNavigation) {
      bucket(r.request().resourceType()).push(`${r.status()} ${r.url().slice(base.length)}`)
    }
  })
  page.on('requestfailed', (r) => {
    // `requestfailed` hands us a Request, not a Response.
    if (isOurs(r.url())) bucket(r.resourceType()).push(`${r.failure()?.errorText ?? 'failed'} ${r.url().slice(base.length)}`)
  })

  try {
    const resp = await page.goto(base + route, { waitUntil: 'load', timeout: 30_000 })
    // The GitHub Pages SPA shim bounces 404s through a query string; let the
    // router settle before we judge whether anything rendered.
    await page.waitForTimeout(1200)

    const rootLen = await page.evaluate(() => document.getElementById('root')?.innerHTML.length ?? -1)
    const text = (await page.evaluate(() => document.body.innerText)).trim()

    if (rootLen === -1) failures.push(`${route}: #root element missing from the served HTML`)
    else if (rootLen < 500) failures.push(`${route}: #root nearly empty (${rootLen} chars) — the app did not render`)
    else if (text.length < 50) failures.push(`${route}: rendered but shows almost no text (${text.length} chars)`)
    else if (jsErrors.length) failures.push(`${route}: uncaught JS error →\n    ${jsErrors.slice(0, 3).join('\n    ')}`)
    else if (brokenCode.length) failures.push(`${route}: broken script/stylesheet →\n    ${[...new Set(brokenCode)].slice(0, 5).join('\n    ')}`)
    else console.log(`  ✓ ${route.padEnd(14)} HTTP ${resp?.status()}, rendered ${rootLen} chars of DOM`)

    for (const m of new Set(brokenMedia)) warnings.push(`${route}: missing media — ${m}`)
  } catch (err) {
    failures.push(`${route}: ${err.message.split('\n')[0]}`)
  }
  await page.close()
}

await browser.close()
server.close()

if (warnings.length) {
  console.warn('\n⚠ Missing media (not blocking):\n' + [...new Set(warnings)].map((w) => '  • ' + w).join('\n'))
}

if (failures.length) {
  console.error('\n✗ Smoke test FAILED:\n' + failures.map((f) => '  • ' + f).join('\n'))
  process.exit(1)
}
console.log(`\n✓ Smoke test passed — all ${ROUTES.length} routes render.`)
