var cloudx = [25, 75, 125, 190, 250, 325, 380, 415, 495, 520, 587];
var cloudr = [20,35,30,48,24,40,25,37,42,28,33]
var cloudy = [30,70,45,120,57,80,39,68,35,75,53]
  //These lines are holders of information that will be drawn from for other parts of the code. 

function setup() {
  createCanvas(600, 400);
  wisp1 = new wisp(550, 150, 15);
  wisp2 = new wisp(25,100,20);
  wisp3 = new wisp(175,175,25);
  wisp4 = new wisp(350,190,10);
    //These lines tell the draw function where to draw the class instances. 
}

function draw() {
  background(30, 161, 227);

  push();
  noStroke();
  fill(33, 110, 29);
  rectMode(CENTER);
  rect(300, 300, 600, 150);
  pop(); //backGround

  push();
  noStroke();
  fill(39, 130, 34);
  ellipseMode(CENTER);
  ellipse(0, 400, 650, 500);
  pop(); //rightHill

  push();
  noStroke();
  fill(45, 151, 70);
  rectMode(CENTER);
  rect(300, 375, 600, 50);
  pop(); //groundBase
  push();
  stroke(112, 220, 36);
  strokeWeight(0.5);
  line(248, 375, 248, 365);
  pop();
  push();
  stroke(112, 220, 36);
  strokeWeight(1.5);
  line(252, 373, 252, 355);
  pop();
  push();
  stroke(112, 220, 36);
  line(255, 375, 255, 360);
  pop();
  push();
  stroke(112, 220, 36);
  strokeWeight(2);
  line(258, 375, 258, 363);
  pop();
  push();
  fill(74, 117, 23);
  noStroke();
  ellipseMode(CENTER);
  ellipse(245, 378, 5, 5);
  ellipse(248, 378, 5, 5);
  ellipse(245, 382, 5, 5);
  ellipse(248, 382, 5, 5);
  pop();
  push();
  fill(74, 117, 23);
  noStroke();
  ellipseMode(CENTER);
  ellipse(262, 370, 5, 5);
  ellipse(265, 370, 5, 5);
  ellipse(262, 374, 5, 5);
  ellipse(265, 374, 5, 5);
  pop(); //weeds
  
  push();
  noStroke();
  fill(44,199,219);
  ellipseMode(CENTER);
  ellipse(570,290,135,80);
  pop(); //pond
  
  push();
  strokeCap(PROJECT);
  strokeWeight(1.5);
  stroke(32,212,60);
  line(585,320,585,280);
  line(580,320,580,285);
  line(560,320,560,295);
  line(555,320,555,290);
  line(550,320,550,300);
  line(540,330,540,310);
  line(535,328,535,300);
  line(530,326,530,305);
  line(505,305,505,285);
  line(500,303,500,283);
  line(503,280,503,270);
  line(505,278,505,270);
  line(509,272,509,260);
  line(511,270,511,255);
  line(520,260,520,250);
  line(523,258,523,240);
  line(525,257,525,244);
  line(528,256,528,242);
  line(540,252,540,235);
  line(543,251,543,230);
  line(555,250,555,230);
  line(557,250,557,235);
  line(560,250,560,240);
  line(573,249,573,230);
  line(576,249,576,235);
  line(580,250,580,230);
  pop(); //pondGrass

  push();
  fill(131,135,135);
  noStroke();
  beginShape();
  vertex(600,300);
  vertex(600,375);
  vertex(505,375);
  vertex(510,355);
  vertex(535,345);
  vertex(550,320);
  vertex(570,320);
  vertex(590,300);
  vertex(600,300);
  endShape();
  pop(); //rock
  

  for (var i = 0; i < 11; i++) {
    push();
    noStroke();
    fill(255);
    ellipseMode(CENTER);
    ellipse(cloudx[i],cloudy[i],cloudr[i]);
    pop(); //clouds

  } //This for loop draws all the clouds by pulling information from the arrays.
  
  wisp1.show();
  wisp1.float(); //right
  wisp2.show();
  wisp2.float(); //left
  wisp3.show();
  wisp3.float(); //midLeft
  wisp4.show();
  wisp4.float(); //midRight
    //These lines call on the class to draw and move four instances of the class.
  
}

class wisp {

  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  show() {

    push();
    fill(139, 204, 155, 200);
    strokeWeight(2);
    stroke(122, 130, 219);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.r);
    pop();

  }

  float() {

    this.x = this.x + random(-0.5,0.5);
    this.y = this.y + random(-1, 1);

  }

}