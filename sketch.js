let algaeData;

let canvas;

let i = 0;

let fontsizeLabel, fontsizeSlider, twLabel, twSlider, leadLabel, leadSlider, xMoveLabel, xMove, yMoveLabel, yMove;

let refButton, saveButton, leButton, ceButton, riButton, alignment, p0, p1, p2, p3, p4, p5, p6, p7, p8;

let showhideButton = true;

let textColorLabel, textColorPicker, bgcLabel, bgcPicker, lcPicker;

let textDropdown;

let mouseWidth;
let mouseHeight;

let bgC;

let UI;

let blankS = false;
let twoC = true;
let pulseR = false;
let circleP = false;
let bothpulseR = false;
let fourR = false;
let cornerCircR = false;
let sideCircR = false;
let mixedCircR = false;


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

  showhideButton = select('#logolink');
  showhideButton.mousePressed(showhideNav);

  UI = createDiv('');
  UI.style('background-color', '#f0f0f0');
  UI.style('opacity', '80%');
  UI.style('z-index', '1');
  UI.style('width', '12rem');
  UI.style('height', '100vh');
  UI.position(0, 0);

  refButton = createButton("Refresh");
  refButton.position(10, 80);
  refButton.mousePressed(refreshButton);
  refButton.style('width', '5rem');
  refButton.style('height', '1.5rem');
  refButton.style('font-size', '0.9rem');
  refButton.style('font-family', 'Karla');
  refButton.parent(UI);

  saveButton = createButton("Save");
  saveButton.position(10 + 90, 80);
  saveButton.mousePressed(saveFile);
  saveButton.style('width', '5rem');
  saveButton.style('height', '1.5rem');
  saveButton.style('font-size', '0.9rem');
  saveButton.style('font-family', 'Karla');
  saveButton.parent(UI);

  textDropdown = createSelect();
  textDropdown.position(10, 80 + 40);
  textDropdown.size(170);
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
  fontsizeSlider.size(170);
  fontsizeSlider.position(10, 80 + 90);
  fontsizeSlider.parent(UI);

  twLabel = createSpan("Line Width =");
  twLabel.style('font-family', 'Karla');
  twLabel.position(10, 80 + 120);
  twLabel.style('font-size', '0.9em');
  twLabel.style('color', '#212121');
  twLabel.parent(UI);

  twSlider = createSlider(0, width, width - 20);
  twSlider.size(170);
  twSlider.position(10, 80 + 140);
  twSlider.parent(UI);

  leadLabel = createSpan("Leading =");
  leadLabel.style('font-family', 'Karla');
  leadLabel.position(10, 80 + 165);
  leadLabel.style('font-size', '0.9em');
  leadLabel.style('color', '#212121');
  leadLabel.parent(UI);

  leadSlider = createSlider(0, 300, 20 * 1.1);
  leadSlider.size(170);
  leadSlider.position(10, 80 + 185);
  leadSlider.parent(UI);

  leButton = createButton("Left");
  leButton.position(10, 80 + 220);
  leButton.style('width', '3.3rem');
  leButton.style('font-size', '0.9em');
  leButton.style('font-family', 'Karla');
  leButton.style('display', 'flex');
  leButton.style('justify-content', 'center');
  leButton.mousePressed(leftAlign);
  leButton.parent(UI);

  ceButton = createButton("Center");
  ceButton.position(10 + 59, 80 + 220);
  ceButton.style('font-family', 'Karla');
  ceButton.style('width', '3.3rem');
  ceButton.style('font-size', '0.9em');
  ceButton.style('display', 'flex');
  ceButton.style('justify-content', 'center');
  ceButton.mousePressed(centerAlign);
  ceButton.parent(UI);

  riButton = createButton("Right");
  riButton.position(10 + 117, 80 + 220);
  riButton.style('width', '3.3rem');
  riButton.style('display', 'flex');
  riButton.style('justify-content', 'center');
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

  xMove = createSlider(0, width, width / 2);
  xMove.size(170);
  xMove.style('font-size', '0.9em');
  xMove.style('font-family', 'Karla');
  xMove.position(10, 80 + 345);
  xMove.parent(UI);

  yMoveLabel = createSpan("Y position =");
  yMoveLabel.style('font-family', 'Karla');
  yMoveLabel.position(10, 80 + 370);
  yMoveLabel.style('font-size', '0.9em');
  yMoveLabel.parent(UI);

  yMove = createSlider(0, height, height / 2);
  yMove.size(170);
  yMove.style('font-size', '0.9em');
  yMove.style('font-family', 'Karla');
  yMove.position(10, 80 + 390);
  yMove.parent(UI);

  lcLabel = createSpan("Lines =");
  lcLabel.style('font-family', 'Karla');
  lcLabel.position(10, 80 + 420);
  lcLabel.style('font-size', '0.9em');
  lcLabel.parent(UI);

  lcPicker = createColorPicker('rgb(0,140,200)');
  lcPicker.position(10, 80 + 445);
  lcPicker.style('width', '4.5rem');
  lcPicker.parent(UI);

  bgcLabel = createSpan("BG Fill =");
  bgcLabel.style('font-family', 'Karla');
  bgcLabel.position(10 + 85, 80 + 420);
  bgcLabel.style('font-size', '0.9em');
  bgcLabel.parent(UI);

  bgcPicker = createColorPicker('rgb(12,31,39)');
  bgcPicker.position(10 + 85, 80 + 445);
  bgcPicker.style('width', '4.5rem');
  bgcPicker.parent(UI);

  patternLabel = createSpan('Patterns =');
  patternLabel.position(10, 80 + 490);
  patternLabel.style('font-family', 'Karla');
  patternLabel.style('font-size', '0.9em');
  patternLabel.parent(UI);

  p0 = createButton('0')
  p0.position(10, 80 + 515);
  p0.style('font-family', 'Karla');
  p0.style('font-size', '0.9em');
  p0.size(53, 25);
  p0.mousePressed(blankSpace);
  p0.parent(UI);

  p1 = createButton('1')
  p1.position(10 + 59, 80 + 515);
  p1.style('font-family', 'Karla');
  p1.style('font-size', '0.9em');
  p1.size(53, 25);
  p1.mousePressed(twoCircles);
  p1.parent(UI);

  p2 = createButton('2')
  p2.position(10 + 118, 80 + 515);
  p2.style('font-family', 'Karla');
  p2.style('font-size', '0.9em');
  p2.size(53, 25);
  p2.mousePressed(pulseRotate);
  p2.parent(UI);

  p3 = createButton('3')
  p3.position(10, 80 + 550);
  p3.style('font-family', 'Karla');
  p3.style('font-size', '0.9em');
  p3.size(53, 25);
  p3.mousePressed(circlePulse);
  p3.parent(UI);

  p4 = createButton('4')
  p4.position(10 + 59, 80 + 550);
  p4.style('font-family', 'Karla');
  p4.style('font-size', '0.9em');
  p4.size(53, 25);
  p4.mousePressed(bothPulseRotate);
  p4.parent(UI);

  p5 = createButton('5')
  p5.position(10 + 118, 80 + 550);
  p5.style('font-family', 'Karla');
  p5.style('font-size', '0.9em');
  p5.size(53, 25);
  p5.mousePressed(fourRect);
  p5.parent(UI);

  p6 = createButton('6')
  p6.position(10, 80 + 585);
  p6.style('font-family', 'Karla');
  p6.style('font-size', '0.9em');
  p6.size(53, 25);
  p6.mousePressed(cornerCircRect);
  p6.parent(UI);

  p7 = createButton('7')
  p7.position(10 + 59, 80 + 585);
  p7.style('font-family', 'Karla');
  p7.style('font-size', '0.9em');
  p7.size(53, 25);
  p7.mousePressed(sideCircRect);
  p7.parent(UI);

  p8 = createButton('8')
  p8.position(10 + 118, 80 + 585);
  p8.style('font-family', 'Karla');
  p8.style('font-size', '0.9em');
  p8.size(53, 25);
  p8.mousePressed(mixedCircRect);
  p8.parent(UI);
  
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

  if (blankS) {
    blankSpace();
  } else if (twoC) {
    twoCircles();
  } else if (pulseR) {
    pulseRotate();
  } else if (circleP) {
    circlePulse();
  } else if (bothpulseR) {
    bothPulseRotate();
  } else if (fourR) {
    fourRect();
  } else if (cornerCircR) {
    cornerCircRect();
  } else if (sideCircR) {
    sideCircRect();
  } else if (mixedCircR) {
    mixedCircRect();
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

function saveFile() {
  save(canvas, 'photistaPoster', 'png');
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function blankSpace() {
  blankS = true;
  twoC = false;
  pulseR = false;
  circleP = false;
  bothpulseR = false;
  fourR = false;
  cornerCircR = false;
  sideCircR = false;
  mixedCircR = false;
  noFill();
  noStroke();
}

function twoCircles() {
  blankS = false;
  twoC = true;
  pulseR = false;
  circleP = false;
  bothpulseR = false;
  fourR = false;
  cornerCircR = false;
  sideCircR = false;
  mixedCircR = false;
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
  blankS = false;
  twoC = false;
  pulseR = true;
  circleP = false;
  bothpulseR = false;
  fourR = false;
  cornerCircR = false;
  sideCircR = false;
  mixedCircR = false;
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
  blankS = false;
  twoC = false;
  pulseR = false;
  circleP = true;
  bothpulseR = false;
  fourR = false;
  cornerCircR = false;
  sideCircR = false;
  mixedCircR = false;
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
  blankS = false;
  twoC = false;
  pulseR = false;
  circleP = false;
  bothpulseR = true;
  fourR = false;
  cornerCircR = false;
  sideCircR = false;
  mixedCircR = false;
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
  blankS = false;
  twoC = false;
  pulseR = false;
  circleP = false;
  bothpulseR = false;
  fourR = true;
  cornerCircR = false;
  sideCircR = false;
  mixedCircR = false;
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
  blankS = false;
  twoC = false;
  pulseR = false;
  circleP = false;
  bothpulseR = false;
  fourR = false;
  cornerCircR = true;
  sideCircR = false;
  mixedCircR = false;
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
  blankS = false;
  twoC = false;
  pulseR = false;
  circleP = false;
  bothpulseR = false;
  fourR = false;
  cornerCircR = false;
  sideCircR = true;
  mixedCircR = false;
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
  blankS = false;
  twoC = false;
  pulseR = false;
  circleP = false;
  bothpulseR = false;
  fourR = false;
  cornerCircR = false;
  sideCircR = false;
  mixedCircR = true;
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