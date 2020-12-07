var circleY = 100;
var circleZ = 150;
var circleA = 125;
var circleB = 175;

function setup() {
  createCanvas(500, 500);
  extraCanvas = createGraphics(500, 500);
  extraCanvas.clear();

}

function draw() {
  background(80);
  


  push();
  stroke(232, 196, 128);
  strokeWeight(10);
  fill(171, 64, 34);
  ellipse(250, 250, 400, 400); //pizza
  pop();

  push();
  if (keyIsPressed == true) {
    extraCanvas.fill(255, 255, 226);
    extraCanvas.noStroke();
    extraCanvas.rect(mouseX, mouseY, 20, 40);
  } //parm
  pop();

  push();
  if (mouseIsPressed) {
    extraCanvas.fill(173, 6, 0);
    extraCanvas.stroke(131, 6, 0);
    extraCanvas.strokeWeight(3);
    extraCanvas.ellipse(mouseX, mouseY, 60, 60);
  } //personalPeperoniPlacement
  pop();

  push();
  for (var x5 = 150; x5 <= 350; x5 = x5 + 50) {
    noStroke();
    fill(165,106,69);
    ellipse(x5,100, 25, 25);
  }
  for (var x4 = 90; x4 <= 400; x4 = x4 + 50) {
    ellipse(x4, 175, 25, 25);
  }
  for (var x = 80; x <= 475; x = x + 50) {
    ellipse(x, 250, 25, 25);
  }
  for (var x2 = 90; x2 <= 400; x2 = x2 + 50){
    ellipse(x2, 325, 25, 25);
  }
  for (var x3 = 150; x3 <= 350; x3 = x3 + 50){
    ellipse(x3, 400, 25, 25);
  } //sausage under parm and PPP
  pop();
  
  image(extraCanvas, 0, 0);
  
  push();
  noStroke();
  fill(225,200);
  ellipse(100, circleY, 20, 20);
  circleY = circleY - 1.5;
  
  ellipse(300,circleA,20,20);
  circleA = circleA - 2;
  
  ellipse(400,circleB,20,20);
  circleB = circleB - 3;
  
  if (circleZ < 175){
    ellipse(200,circleZ,20,20);
    circleZ = circleZ - 4;
  } //steam
  pop();
  
}