let colourPicker1;
let brushSizeSlider;

function setup() {
  createCanvas(800, 600);

  colourPicker1 = createColorPicker();
  colourPicker1.position(50, 620);

 
  brushSizeSlider = createSlider(5, 100, 20, 1);
  brushSizeSlider.position(200, 620);

  background(255); 
}

function draw() {
  let brushSize = brushSizeSlider.value();

  if (mouseIsPressed) {
    fill(colourPicker1.value());
    noStroke();
    ellipse(mouseX, mouseY, brushSize, brushSize);
  }

  
  fill(0);
  noStroke();
  rect(0, 580, width, 40);
  fill(255);
  textSize(20);
  text('Brush size: ' + brushSize, 350, 605);
}
