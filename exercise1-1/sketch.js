let modeButton;
let buttonText = "add circle";
let circles = [];

function setup() {
  createCanvas(400, 400);
  noStroke();
  buttonSetup();
}

function buttonSetup() {
  modeButton = createButton(buttonText);
  modeButton.size(100, 40);
  modeButton.position(width / 2 - 50, height - 50);
  modeButton.mouseClicked(addCircle);
}

function draw() {
  background(220);

  for (let c of circles) {
    fill(c.col);
    ellipse(c.x, c.y, c.r);
  }
}

function addCircle() {
  circles.push({
    x: random(width),
    y: random(height - 60),
    r: random(20, 60),
    col: color(random(255), random(255), random(255))
  });
}