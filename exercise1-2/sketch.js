let colourPicker1;
let colourPicker2;

function setup() {
  createCanvas(400, 400);

  // create two color pickers
  colourPicker1 = createColorPicker();
  colourPicker1.position(0, 100);

  colourPicker2 = createColorPicker();
  colourPicker2.position(width / 2, 100);
}

function draw() {
  background(colourPicker1.value());
  fill(colourPicker2.value());

  textSize(20);
  text('University of York', 200, 55);
  textSize(100);
  textAlign(CENTER,CENTER);

}
