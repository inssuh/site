let canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight / 2);
}

function draw() {
    background(49, 92, 49);
    pulseRotate();

}

function pulseRotate() {
    noFill();
    stroke(192, 235, 193, 50);
    rectMode(CENTER);

    for (let i = 0; i < width * 3; i += 50) {
        push();
        translate(width / 2, 0 - 360);
        rotate(frameCount / 500);
        rect(0, 0, i, i, 360);
        pop();
    }

    for (let i = 0; i < width * 3; i += 50) {
        push();
        translate(width / 2, height + 360);
        rotate(frameCount / 500);
        ellipse(0, 0, i, map(sin(frameCount / 500), -1, 1, i, i * 2));
        pop();
    }

}