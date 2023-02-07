const color = {
  bc: "#88cccc",
  dark_grey: "#312B2D",
  ground: "#D49E9E",
  pink: "#FC3E77",
  light_green: "#8AD9EC",
  dark_green: "#109FB1",
  mid_grey: "#594F57",
  light_blue: "#2596be"
};

const p = [16756655, 13430510, 8965324, 9099756, 961181, 1089457, 34969, 13934238, 16110792, 15488645, 16531063, 5853015, 3222317];

// Create a new canvas to the browser size
function setup() {
  createCanvas(windowWidth, windowHeight);
}

// On window resize, update the canvas size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // Fill in the background
  background('#88CCCC');

  noStroke();

  // Get center of page
  const x = width / 2;
  const y = height / 2;

  // Find smallest dimension and scale it down
  const diameter = min(width, height) * 0.5;

  let headX = x;
  let headY = width / 4;
  let headSize = width / 4;


  fill("white");
  ellipse(headX, headY, headSize, headSize);

  //draw the body
  fill("red");
  rect(headX - headSize/2, headY + headSize/1.5, headSize, headSize*1.5);

  //draw the hair
  fill("blue");
  arc(headX, headY - headSize/8, headSize*1.3, headSize*1.3, PI, 2*PI, CHORD);
}