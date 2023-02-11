let colors, sound;

function preload() {
  colors = loadJSON("../color-palette.json");
  sound = loadSound("../sound/sound.mp3")
}

let x, y, osc, freq;

// Create a new canvas to the browser size
function setup() {
  createCanvas(windowWidth, windowHeight);

  strokeWeight(10);
  rectMode(CENTER);
  noFill();
  x = width / 2;
  y = height / 2;

  Tone.Master.volume.value = -100;

  osc = new p5.Oscillator('sine');
  osc.connect(Tone.Master);
}

// On window resize, update the canvas size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Trigger synth OFF
function mousePressed () {
  osc.start();
}

// Trigger synth OFF
function mouseReleased () {
  osc.stop();
}

function draw() {
  // Fill in the background
  background(colors.background);
  freq = map(mouseX, 0, width, 200, 800);

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