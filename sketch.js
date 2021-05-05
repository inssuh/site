let algaeData;

let canvas;

let i = 0;

let fontsizeLabel, fontsizeSlider, twLabel, twSlider, leadLabel, leadSlider, xMoveLabel, xMove, yMoveLabel, yMove;

let refButton, leButton, ceButton, riButton, alignment;

let showhideButton = true;

let textColorLabel, textColorPicker, bgcLabel, bgcPicker, lcPicker;

let textDropdown;

let mouseWidth;
let mouseHeight;

let bgC;

let UI;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function preload() {
  algaeData = loadJSON("algae.json");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  mouseWidth = width / 2;
  mouseHeight = height / 2;

  rectMode(CENTER);
  textAlign(CENTER, CENTER);

  UI = createDiv('');
  UI.style('background-color', '#f0f0f0');
  UI.style('opacity', '80%');
  UI.style('z-index', '1');
  UI.style('width', '12rem');
  UI.style('height', '100vh');
  UI.position(0,0);

  refButton = createButton("Refresh")
  refButton.position(10, 80);
  refButton.mousePressed(refreshButton);
  refButton.style('background', '#f0f0f0');
  refButton.style('width', '5rem');
  refButton.style('height', '1.5rem');
  refButton.style('border', 'none');
  refButton.style('outline', '1px solid #212121');
  refButton.style('font-size', '0.9rem');
  refButton.style('font-family', 'Karla');
  refButton.parent(UI);

  textDropdown = createSelect();
  textDropdown.position(10, 80 + 40);
  textDropdown.style('font-size', '0.9em');
  textDropdown.option('Roboto');
  textDropdown.option('Oswald');
  textDropdown.option('Raleway');
  textDropdown.option('Fjalla One');
  textDropdown.option('Montserrat Alternates');
  textDropdown.option('Karla');
  textDropdown.option('Zilla Slab');
  textDropdown.parent(UI);

  fontsizeLabel = createSpan("Text Size =");
  fontsizeLabel.style('font-family', 'Karla');
  fontsizeLabel.position(10, 80 + 70);
  fontsizeLabel.style('font-size', '0.9em');
  fontsizeLabel.style('color', '#212121');
  fontsizeLabel.parent(UI);

  fontsizeSlider = createSlider(0, 100, 20);
  fontsizeSlider.position(10, 80 + 90);
  fontsizeSlider.parent(UI);

  twLabel = createSpan("Line Width =");
  twLabel.style('font-family', 'Karla');
  twLabel.position(10, 80 + 120);
  twLabel.style('font-size', '0.9em');
  twLabel.style('color', '#212121');
  twLabel.parent(UI);

  twSlider = createSlider(0, width, width - 20);
  twSlider.position(10, 80 + 140);
  twSlider.parent(UI);

  leadLabel = createSpan("Leading =");
  leadLabel.style('font-family', 'Karla');
  leadLabel.position(10, 80 + 165);
  leadLabel.style('font-size', '0.9em');
  leadLabel.style('color', '#212121');
  leadLabel.parent(UI);

  leadSlider = createSlider(0, 300, 20 * 1.1);
  leadSlider.position(10, 80 + 185);
  leadSlider.parent(UI);

  leButton = createButton("Left");
  leButton.position(10, 80 + 220);
  leButton.style('font-size', '0.9em');
  leButton.style('font-family', 'Karla');
  leButton.mousePressed(leftAlign);
  leButton.parent(UI);

  ceButton = createButton("Center");
  ceButton.position(10 + 45, 80 + 220);
  ceButton.style('font-family', 'Karla');
  ceButton.style('font-size', '0.9em');
  ceButton.mousePressed(centerAlign);
  ceButton.parent(UI);

  riButton = createButton("Right");
  riButton.position(10 + 110, 80 + 220);
  riButton.style('font-size', '0.9em');
  riButton.style('font-family', 'Karla');
  riButton.mousePressed(rightAlign);
  riButton.parent(UI);

  textColorLabel = createSpan("Text Color = ");
  textColorLabel.style('font-family', 'Karla');
  textColorLabel.position(10, 80 + 260);
  textColorLabel.style('font-size', '0.9em');
  textColorLabel.style('color', '#212121');
  textColorLabel.parent(UI);

  textColorPicker = createColorPicker('rgb(240,240,240');
  textColorPicker.position(10, 80 + 285);
  textColorPicker.size(80);
  textColorPicker.parent(UI);

  xMoveLabel = createSpan("X position =");
  xMoveLabel.style('font-family', 'Karla');
  xMoveLabel.position(10, 80 + 325);
  xMoveLabel.style('font-size', '0.9em');
  xMoveLabel.parent(UI);

  xMove = createSlider(0, width, width/2);
  xMove.style('font-size', '0.9em');
  xMove.style('font-family', 'Karla');
  xMove.position(10, 80 + 345);
  xMove.parent(UI);

  yMoveLabel = createSpan("Y position =");
  yMoveLabel.style('font-family', 'Karla');
  yMoveLabel.position(10, 80 + 370);
  yMoveLabel.style('font-size', '0.9em');
  yMoveLabel.parent(UI);

  yMove = createSlider(0, height, height/2);
  yMove.style('font-size', '0.9em');
  yMove.style('font-family', 'Karla');
  yMove.position(10, 80 + 390);
  yMove.parent(UI);

  lcLabel = createSpan("Animated Lines =");
  lcLabel.style('font-family', 'Karla');
  lcLabel.position(10, 80 + 420);
  lcLabel.style('font-size', '0.9em');
  lcLabel.parent(UI);

  lcPicker = createColorPicker('rgb(0,140,200)');
  lcPicker.position(10, 80 + 445);
  lcPicker.size(80);
  lcPicker.parent(UI);

  bgcLabel = createSpan("Background Color =");
  bgcLabel.style('font-family', 'Karla');
  bgcLabel.position(10, 80 + 485);
  bgcLabel.style('font-size', '0.9em');
  bgcLabel.parent(UI);

  bgcPicker = createColorPicker('rgb(12,31,39)');
  bgcPicker.position(10, 80 + 510);
  bgcPicker.size(80);
  bgcPicker.parent(UI);

  showhideButton = select('#logolink');
  showhideButton.mousePressed(showhideNav);
  
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function draw() {
  let algae = algaeData.algae;

  if (textDropdown.value() == 'Roboto') {
    textFont('Roboto');
  } else if (textDropdown.value() == 'Oswald') {
    textFont('Oswald');
  } else if (textDropdown.value() == 'Raleway') {
    textFont('Raleway');
  } else if (textDropdown.value() == 'Fjalla One') {
    textFont('Fjalla One');
  } else if (textDropdown.value() == 'Montserrat Alternates') {
    textFont('Montseratt Alternates');
  } else if (textDropdown.value() == 'Karla') {
    textFont('Karla');
  } else if (textDropdown.value() == 'Zilla Slab') {
    textFont('Zilla Slab');
  }

  tS = fontsizeSlider.value();
  tW = twSlider.value();
  tC = textColorPicker.color();
  bgC = bgcPicker.color();
  tL = leadSlider.value();
  lineC = lcPicker.color();
  xM = xMove.value();
  yM = yMove.value();

  background(bgC);

  if (key === '1') {
    twoCircles();
  } else if (key === '2') {
    pulseRotate();
  } else if (key === '3') {
    circlePulse();
  } else if (key === '4') {
    bothPulseRotate();
  } else if (key === '5') {
    fourRect();
  } else if (key === '6') {
    cornerCircRect();
  } else if (key === '7') {
    sideCircRect();
  } else if (key === '8') {
    mixedCircRect();
  } else {
    nothing();
  }

  noStroke();
  textSize(tS);
  textLeading(tL); //tS*1.1
  textAlign(alignment, CENTER);
  fill(tC);
  textFont(textDropdown)
  text(algae[i].quote, xM, yM, tW, height);

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function refreshButton() {
  i = int(random(0, 30));
}

function leftAlign() {
  alignment = LEFT;
}

function centerAlign() {
  alignment = CENTER;
}

function rightAlign() {
  alignment = RIGHT;
}

function showhideNav() {
  showhideButton = !showhideButton;

  if (showhideButton === true) {
    UI.show();
  } else if (showhideButton === false) {
    UI.hide();
  }

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function nothing() {
  noFill();
  noStroke();
}

function twoCircles() {
  noFill();
  stroke(lineC);
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

function pulseRotate() {
  noFill();
  stroke(lineC);
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

function circlePulse() {
  noFill();
  stroke(lineC);
  rectMode(CENTER);

  for (let i = 0; i < width * 3; i += 50) {
    push();
    translate(width + 360, 0);
    rotate(frameCount / 400);
    ellipse(0, 0, map(sin(frameCount / 300), -1, 1, i, i * 2), map(sin(frameCount / 500), -1, 1, i, i * 2));
    pop();
  }

  for (let i = 0; i < width * 3; i += 50) {
    push();
    translate(0, height + 360);
    rotate(frameCount / 400);
    ellipse(0, 0, map(sin(frameCount / 300), -1, 1, i, i * 2), map(sin(frameCount / 500), -1, 1, i, i * 2));
    pop();
  }

}

function bothPulseRotate() {
  noFill();
  stroke(lineC);
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

function fourRect() {
  noFill();
  stroke(lineC);
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

function cornerCircRect() {
  noFill();
  stroke(lineC);
  rectMode(CENTER);

  for (let i = 0; i < width * 3; i += 100) {
    push();
    translate(0 - 360, 0);
    rotate(frameCount / 500);
    ellipse(0, 0, map(sin(frameCount / 500), -1, 1, i, i * 2), map(sin(frameCount / 500), -1, 1, i, i * 2));
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
    ellipse(0, 0, map(sin(frameCount / 500), -1, 1, i, i * 2), map(sin(frameCount / 500), -1, 1, i, i * 2));
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

function sideCircRect() {
  noFill();
  stroke(lineC);
  rectMode(CENTER);

  for (let i = 0; i < width * 3; i += 100) {
    push();
    translate(width / 2, 0 - 360);
    rotate(frameCount / 500);
    ellipse(0, 0, map(sin(frameCount / 500), -1, 1, i, i * 2), map(sin(frameCount / 500), -1, 1, i, i * 2));
    pop();
  }

  for (let i = 0; i < width * 3; i += 100) {
    push();
    translate(width + 360, height / 2);
    rotate(frameCount / 500);
    rect(0, 0, map(sin(frameCount / 500), -1, 1, i, i * 2), map(sin(frameCount / 500), -1, 1, i, i * 2), 360);
    pop();
  }

  for (let i = 0; i < width * 3; i += 100) {
    push();
    translate(width / 2, height + 360);
    rotate(frameCount / 500);
    ellipse(0, 0, map(sin(frameCount / 500), -1, 1, i, i * 2), map(sin(frameCount / 500), -1, 1, i, i * 2));
    pop();
  }

  for (let i = 0; i < width * 3; i += 100) {
    push();
    translate(0 - 360, height / 2);
    rotate(frameCount / 500);
    rect(0, 0, map(sin(frameCount / 500), -1, 1, i, i * 2), map(sin(frameCount / 500), -1, 1, i, i * 2), 360);
    pop();
  }

}

function mixedCircRect() {
  noFill();
  stroke(lineC);
  rectMode(CENTER);

  for (let i = 0; i < width * 3; i += 100) {
    push();
    translate(width / 2, 0 - 360);
    rotate(frameCount / 500);
    ellipse(0, 0, map(sin(frameCount / 500), -1, 1, i, i * 2), map(sin(frameCount / 500), -1, 1, i, i * 2));
    pop();
  }

  for (let i = 0; i < width * 3; i += 100) {
    push();
    translate(width + 360, 0);
    rotate(frameCount / 500);
    ellipse(0, 0, map(sin(frameCount / 500), -1, 1, i, i * 2), map(sin(frameCount / 500), -1, 1, i, i * 2));
    pop();
  }

  for (let i = 0; i < width * 3; i += 100) {
    push();
    translate(width / 2, height + 360);
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