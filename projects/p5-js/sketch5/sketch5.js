let colors, sound;

function preload() {
  colors = loadJSON("../color-palette.json");
  sound = loadSound("../sound/wind.mp3")
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

  // osc = new p5.Oscillator('sine');
  // osc.amp(0.01);
  sound.setVolume(10);
}

// On window resize, update the canvas size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Trigger sound ON
function mousePressed () {
  //osc.start();
  sound.loop();
}

// Trigger sound OFF
function mouseReleased () {
  //osc.stop();
  sound.stop();
}

function draw() {
  // Fill in the background
  background(colors.background);

  // Shift the coordinate system
  if (mouseIsPressed) {
    x = mouseX;
    y = mouseY;
    //osc.freq(map(x, 0, width, 200, 800));
    sound.rate(map(x, 0, width, 0, 2));
    //console.log(map(x, 0, width, 0, 2));
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