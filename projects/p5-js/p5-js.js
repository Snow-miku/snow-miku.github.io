"use strict";
(function() {
  window.addEventListener("load", init);

  function init() {
    draw();
  }

    // Create a new canvas to the browser size
    function setup() {
      createCanvas(windowWidth, windowHeight);
    }

    // On window resize, update the canvas size
    function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
    }

    // Render loop that draws shapes with p5
    function draw() {
      // Fill in the background
      background('black');

      // Get center of page
      const x = width / 2;
      const y = height / 2;

      // Find smallest dimension and scale it down
      const diameter = min(width, height) * 0.5;

      // Set drawing style
      fill('white');
      noStroke();

      // Draw a circle
      circle(x, y, diameter);
    }
})();