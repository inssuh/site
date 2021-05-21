let canvas;

let ww, wh;

function windowResized() {
    resizeCanvas(ww, wh);
}

function setup() {
  ww = windowWidth;
  wh = windowHeight / 2;
  canvas = createCanvas(ww, wh);
}

function draw() {
  ww = windowWidth;
  wh = windowHeight / 2;
  background(56, 42, 66);
  fourRect();
}

function fourRect() {
  noFill();
  stroke(240, 213, 242, 50);
  rectMode(CENTER);

  for (let i = 0; i < width * 3; i += 100) {
    push();
    translate(0 - 360, 0);
    rotate(frameCount / 500);
    rect(0, 0, map(sin(frameCount / 500), -1, 1, i, i * 2), map(sin(frameCount / 500), -1, 1, i, i * 2), 360);
    pop();
  }

  for (let i = 0; i < width * 3; i += 100) {
    push();
    translate(width + 360, 0);
    rotate(frameCount / 500);
    rect(0, 0, map(sin(frameCount / 500), -1, 1, i, i * 2), map(sin(frameCount / 500), -1, 1, i, i * 2), 360);
    pop();
  }

  for (let i = 0; i < width * 3; i += 100) {
    push();
    translate(width + 360, height);
    rotate(frameCount / 500);
    rect(0, 0, map(sin(frameCount / 500), -1, 1, i, i * 2), map(sin(frameCount / 500), -1, 1, i, i * 2), 360);
    pop();
  }

  for (let i = 0; i < width * 3; i += 100) {
    push();
    translate(0 - 360, height);
    rotate(frameCount / 500);
    rect(0, 0, map(sin(frameCount / 500), -1, 1, i, i * 2), map(sin(frameCount / 500), -1, 1, i, i * 2), 360);
    pop();
  }

}