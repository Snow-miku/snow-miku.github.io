let colors;

function preload() {
  colors = loadJSON("../color-palette.json");
}

// Create a new canvas to the browser size
function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(random(5, 15));
  rectMode(CENTER);
  noFill();
  frameRate(1);
}

// On window resize, update the canvas size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
 // Fill in the random background
  let randBg = random(colors.list);
  background(randBg);

  // Get center of page
  const x = width / 2;
  const y = height / 2;

  // Shift the coordinate system
  translate(x,y);

  // Find largest dimension
  const maxDim = max(width, height);

  let curWidth = 0;
  let iteration = 0;

  //console.log(Math.floor(random(0,12)));

  while (curWidth < maxDim * 1.1) {
    let randStr = random(colors.list);
    //console.log(randStr == randBg);

    while (randStr === randBg) {
      randStr = random(colors.list);
    }
    stroke(randStr);
    rotate(PI/12);
    rect(0, 0, curWidth);
    curWidth += width / 26;
    iteration++;
  }
}