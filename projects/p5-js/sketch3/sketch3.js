let colors;

function preload() {
  colors = loadJSON("../color-palette.json");
}

// Create a new canvas to the browser size
function setup() {
  createCanvas(windowWidth, windowHeight);

  strokeWeight(10);
  rectMode(CENTER);
  noFill();
}

// On window resize, update the canvas size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // Fill in the background
  background(colors.background);

  // Get center of page
  const x = width / 2;
  const y = height / 2;

  // Shift the coordinate system
  translate(x,y);

  // Find largest dimension
  const maxDim = max(width, height);

  let curWidth = 0;
  let iteration = 0;

  while (curWidth < maxDim * 1.1) {
    stroke(colors.list[iteration%12]);
    rotate(PI/12);
    rect(0, 0, curWidth);
    curWidth += width / 26;
    iteration++;
  }
}