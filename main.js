function setup() {
  createCanvas(2000, 1000);
  background(0);
  stroke(255);
  strokeWeight(5);
}

function draw() {

  point(mouseX,mouseY);

    if (mouseIsPressed) {
    stroke(random(255),random(255),random(255));

  }

}

function keyTyped() {
  if ( key == 'r') {
     stroke(255,0,0)
  } else if ( key == 'g') {
     stroke(0,255,0)
  } else if ( key == 'b') {
    stroke(0,0,255)
  } 
}