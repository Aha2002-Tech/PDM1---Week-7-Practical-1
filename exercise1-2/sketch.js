let myPicker1;
let myPicker2;

function setup(){

createCanvas(400,400);
}

colourPicker1.position(0, 100);
colourPicker2.position(width / 2, 100);



function draw(){

background(colourPicker1.value());
fill(colourPicker2.value());
text(c, 25, 55);

stroke(500)
rect(25,25,50,20);

stroke(400);
rect(350,2,50,20);

}
createColorPicker(){
colourPicker1.parent(container);
colourPicker2.parent(container);

}
}
