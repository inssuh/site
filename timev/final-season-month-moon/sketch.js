let now;

let shapeColor

let strokeColor;

let aOpac;

let canvas;

function setup() {
  canvas = createCanvas(800, 500);
  angleMode(DEGREES);
}

function draw() {
  now = clock();

  background(33);

  aOpac = map(now.moon, 0, 1, 0, 255);

  if (now.season === 1) {
    shapeColor = color(95, 191, 71, aOpac);
    strokeColor = color(95, 191, 71);
  } else if (now.season === 2) {
    shapeColor = color(255, 187, 0, aOpac);
    strokeColor = color(255, 187, 0);
  } else if (now.season === 3) {
    shapeColor = color(198, 98, 48, aOpac);
    strokeColor = color(198, 98, 48);
  } else if (now.season === 4) {
    shapeColor = color(57, 181, 184, aOpac);
    strokeColor = color(57, 181, 184);
  }

  let rotShape = map(now.moon, 0, 1, 0, 360);

  rectMode(CENTER);
  translate(width * 0.5, height * 0.5);
  rotate(rotShape);

  for (let i = 0; i < now.month + 1; i++) {
    fill(shapeColor);
    stroke(strokeColor);
    rect(0, 0, 25 * i, 25 * i,10);
  }

  for (let i = 0; i < now.month; i++) {
    fill(33);
    stroke(strokeColor);
    rect(0, 0, 25 * i, 25 * i,10);
  }

  for (let i = 0; i < 13; i++) {
    noFill();
    stroke(240, 240, 240, 255 * 0.1);
    rect(0, 0, 25 * i, 25, 10);
  }

  for (let i = 0; i < 13; i++) {
    noFill();
    stroke(240, 240, 240, 255 * 0.1);
    rect(0, 0, 25, 25 * i, 10);
  }


}
