let canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight / 2);
}

function draw() {
    background(24, 78, 99);
    twoCircles();

}

function twoCircles() {
    noFill();
    stroke(99, 189, 79, 50);
    rectMode(CENTER);

    for (let i = 0; i < width * 3; i += 50) {
        push();
        translate(0 - 360, 0);
        rotate(frameCount / 500);
        rect(0, 0, i, i, 360);
        pop();
    }

    for (let i = 0; i < width * 3; i += 50) {
        push();
        translate(width + 360, height);
        rotate(frameCount / 500);
        rect(0, 0, i, i, 360);
        pop();
    }

}