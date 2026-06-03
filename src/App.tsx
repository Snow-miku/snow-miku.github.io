import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout'
import { Home, Gallery, Resume, CaseStudy, CaseStudyDetail, About } from '@/pages'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/case-study/:id" element={<CaseStudyDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
