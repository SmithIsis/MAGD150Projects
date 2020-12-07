var x = 0
var y = 500
var speed = 6
var speed1 = 2*3

var h = 400
var v = 400
var speed2 = 1
var speed3 = 1

var o = 475
var k = 475
var speed4 = 3
var speed5 = 1

function setup() {
  createCanvas(500, 500);
  let a = -12;
  let b = abs(a);

  print(a);
  print(b);
  print(x);
  
}



function draw() {
  background(102,185,200);
  
  push();
  stroke(0,0,255,200);
  fill(23,161,245,200);
  ellipse(380,400,90,90);
  pop();
  push();
  noStroke();
  fill(23,208,245,200);
  ellipse(400,380,30,30);
  pop();
  push()
  noStroke();
  fill(23,255,245,200);
  ellipse(405,372,10,10);
  pop();
  
  push();
  strokeWeight(1);
  stroke(109,125,166),200;
  fill(138,158,209,200);
  ellipse(425,355,20,20);
  pop();
  push();
  noStroke();
  fill(168,193,209,200);
  ellipse(429,350,5,5);
  pop();
  push();
  strokeWeight(1.5);
  stroke(200,30,93,200);
  fill(168,30,93,200);
  ellipse(455,385,30,30);
  pop();
  push();
  noStroke();
  fill(235,35,112,200);
  ellipse(463,378,8,8);
  pop();
  
  
////////////////////////////////////////////
  
  
  push();
  noStroke();
  fill(147,255,135,200);
  let b1 = map(mouseX,50,width,300,75);
  ellipse(b1,250,50,50);
  pop();
  push();
  noStroke();
  fill(197,255,135,200);
  let b2 = map(mouseX,mouseY,width,250,100,true);
  ellipse(b2,350,75,75);
  pop();
  
  
///////////////////////////////////////////////
  
  
  push();
  stroke(0,0,100,150);
  fill(125,173,255,99);
  ellipse(x,y,30,30);
  pop(); //bubble 3
  push();
  noStroke();
  fill(125,206,255);
  ellipse(x+4,y-4,10,10);
  pop(); //detail
  
  if (x > width){
      speed = - 3;
  }
  if (y <= 0){
      speed1 = - 2
  }
  if (x <= 0){
      speed = 3.5
  }
  if (y > height){
      speed1 = 2
  }
  
  x = x + speed;
  y = y - speed1;
  
  
////////////////////////////////////////////////
  
  
  push(); 
  if (mouseX > 250) {
    stroke(154,61,227);
    fill(122,99,186,180);
    ellipse(125,100,60,60);
  }else {
    stroke(154,61,227);
    fill(154,141,227);
    ellipse(125,100,60,60);
  }
  pop(); //bubble 4
  
  push();
  if (mouseX > 250) {
    noStroke();
    fill(160,108,210,150);
    ellipse(110,85,15,15);
  }else {
    noStroke();
    fill(173,176,255,150);
    ellipse(110,85,15,15);
  }
  pop(); //detail
  
  
///////////////////////////////////////////////
  
  
  push();
  noStroke();
  fill(221,253,217,190);
  ellipse(h,v,45,45);
  ellipse(h-10,v+10,15,15);
  pop();

  if (h > width){
      speed2 = +5;
  }
  if (h <= 0){
      speed2 = -2;
  }
  if (v <= 0){
      speed3 = -2;
  }
  if (v >= height){
      speed3 = +7;
  }
  
  h = h - speed2;
  v = v - speed3;
  
  
///////////////////////////////////////////
  
  
  push();
  noStroke();
  fill(230,165,166,175);
  ellipse(o,k,50,50);
  pop();
  push();
  stroke(144,112,145);
  strokeWeight(2);
  fill(189,147,191);
  ellipse(o-25,k-25,10,10);
  pop();
  push();
  noStroke();
  fill(252,196,255);
  ellipse(o-10,k+15,5,5);
  pop();
  
  o = o - speed4;
  k = k - speed5;
  
  
///////////////////////////////
  
  
  push();
  fill(241,161,121,100);
  noStroke();
  ellipse(mouseX,mouseY,80,80);
  pop();
  push();
  noStroke();
  fill(241,171,121,100);
  ellipse(mouseX,mouseY,65,65);
  pop();
  push();
  noStroke();
  fill(241,190,121,100);
  ellipse(mouseX,mouseY,45,45);
  pop();
  push();
  noStroke();
  fill(241,220,121,100);
  ellipse(mouseX,mouseY,20,20);
  pop();
  
  push();
  strokeWeight(2);
  point(mouseX,mouseY);
  pop();
  
  
////////////////////////////////////////
  
  push();
  let a = 50;
  let b = 450;
  let c = lerp(a, b, 0.2);
  let d = lerp(a, b, 0.5);
  let e = lerp(a, b, 0.8);

  let p = 175;
  let q = 200;
  let r = 225;
  let s = 250;
  let t = 300;

  strokeWeight(7);
  stroke(176,208,255,200);
  point(a, p);
  stroke(150,250,245,200);
  point(b, q);

  stroke(108,0,255,200);
  point(c, r);
  stroke(24,113,255,200);
  point(d, s);
  stroke(155,143,214,200);
  point(e, t);
  pop();
  
  
///////////////////////////////////////////  

  
  push();
  let bub = '17';
  let diameter = float(bub);
  noStroke();
  fill(235,237,130);
  ellipse(width/1.25,height/4,diameter,diameter);
  pop();
  

  
}