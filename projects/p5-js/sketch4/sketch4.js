let colors;

function preload() {
  colors = loadJSON("../color-palette.json");
}

let x, y;

// Create a new canvas to the browser size
function setup() {
  createCanvas(windowWidth, windowHeight);

  strokeWeight(10);
  rectMode(CENTER);
  noFill();
  x = width / 2;
  y = height / 2;
}

// On window resize, update the canvas size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // Fill in the background
  background(colors.background);

  // Shift the coordinate system
  if (mouseIsPressed) {
    x = mouseX;
    y = mouseY;
  }

  // Shift the coordinate system
  translate(x, y);

  if (mouseIsPressed) {
    rotate(millis() / 500);
  }

  // Find largest dimension
  const maxDim = max(width, height);

  let curWidth = 0;
  let iteration = 0;

  while (curWidth < maxDim * 2) {
    stroke(colors.list[iteration%12]);
    rotate(PI/12);
    rect(0, 0, curWidth);
    curWidth += width / 26;
    iteration++;
  }
}