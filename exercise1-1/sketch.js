let modeButton;
let circles = [];

function setup() {
  createCanvas(400, 400);
  noStroke();
  modeButton = createButton("add circle");
  const container = select("main");
  modeButton.parent(container);
  modeButton.size(400, 80);
  modeButton.position(0, height - 80);
  modeButton.mouseClicked(addCircle);
}

function draw() {
  background(0,255,255);

  for (let c of circles) {
    fill(c.col);
    ellipse(c.x, c.y, c.r, c.r); 
  }
}

function addCircle() {
  circles.push({
    x: random(width),
    y: random(height - 80), 
    r: random(20, 60),
    col: color(random(255), random(255), random(255))
  });
}
