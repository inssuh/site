let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight / 2);
}

function draw() {
  background(11, 43, 71);
  bothPulseRotate();

}

function bothPulseRotate() {
  noFill();
  stroke(209, 225, 240, 50);
  rectMode(CENTER);

  for (let i = 0; i < width * 3; i += 50) {
    push();
    translate(0 - 360, height / 2);
    rotate(frameCount / 500);
    rect(0, 0, map(sin(frameCount / 500), -1, 1, i, i * 2), map(sin(frameCount / 500), -1, 1, i, i * 2), 360);
    pop();
  }

  for (let i = 0; i < width * 3; i += 50) {
    push();
    translate(width + 360, height / 2);
    rotate(frameCount / 500);
    ellipse(0, 0, map(sin(frameCount / 500), -1, 1, i, i * 2), map(sin(frameCount / 500), -1, 1, i, i * 2));
    pop();
  }

}