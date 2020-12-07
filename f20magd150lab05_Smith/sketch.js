var x = 383;
var y = 420;
var w = 35;
var h = 20;
var circleX = 400;
var circleY = 470;
var radius = 15;
var ballX = 65;
var ballY = 225;
var speed = 1;
var speed1 = 1;


function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(70,150,176);
  
  push();
  strokeWeight(30);
  strokeCap(PROJECT);
  stroke(255);
  line(0,485,500,485);
  pop(); //trim
  
  push();
  line(0,500,500,500);
  line(500,500,500,0);
  line(0,0,0,500);
  line(0,0,500,0);
  pop(); //borderToFixDisappearingTrim
  
  push();
  strokeWeight(15);
  strokeCap(SQUARE);
  strokeCap(PROJECT);
  stroke(130,78,53);
  line(160,380,135,500);
  line(340,380,365,500);
  pop(); //tableBackLegs
  
  push();
  strokeWeight(15);
  strokeCap(SQUARE);
  strokeCap(PROJECT);
  stroke(161,96,66);
  line(100,500,150,375);
  line(400,500,350,375);
  line(125,370,375,370);
  pop(); //table
  
  push();
  strokeCap(SQUARE);
  strokeCap(PROJECT);
  strokeWeight(15);
  line(200,355,300,355);
  line(230,340,270,340);
  pop(); //TVstand
  
  push();
  strokeWeight(10);
  fill(25);
  rectMode(CENTER);
  rect(250,200,400,255);
  pop(); //TVscreen
  
  push();
  fill(120);
  stroke(100);
  rectMode(CENTER);
  rect(400,455,50,88);
  pop(); //remote
  
  push();
  noFill();
  stroke(37,5,179);
  arc(52,0,100,50,0,PI);
  arc(152,0,100,50,0,PI);
  arc(252,0,100,50,0,PI);
  arc(352,0,100,50,0,PI);
  arc(452,0,95,50,0,PI);
  pop(); //lightString
  
  push();
  noStroke();
  fill(255,243,186,150);
  ellipseMode(CENTER);
  ellipse(15,24,14,16);
  ellipse(45,30,14,16);
  ellipse(80,27,14,16);
  ellipse(122,27,14,16);
  ellipse(150,32,14,16);
  ellipse(180,27,14,16);
  ellipse(222,27,14,16);
  ellipse(252,32,14,16);
  ellipse(282,27,14,16);
  ellipse(322,27,14,16);
  ellipse(352,32,14,16);
  ellipse(382,27,14,16);
  ellipse(422,27,14,16);
  ellipse(452,32,14,16);
  ellipse(482,26,14,16);
  pop(); //lightsFlare
   
  push();
  noStroke();
  fill(255,243,130);
  ellipseMode(CENTER);
  ellipse(15,24,8,12);
  ellipse(45,30,8,12);
  ellipse(80,27,8,12);
  ellipse(122,27,8,12);
  ellipse(150,32,8,12);
  ellipse(180,27,8,12);
  ellipse(222,27,8,12);
  ellipse(252,32,8,12);
  ellipse(282,27,8,12);
  ellipse(322,27,8,12);
  ellipse(352,32,8,12);
  ellipse(382,27,8,12);
  ellipse(422,27,8,12);
  ellipse(452,32,8,12);
  ellipse(482,26,8,12);
  pop(); //lights 
  
  push();
  strokeWeight(3);
  stroke(255,0,0);
  point(250,330);
  pop(); //offTVlight
  
  push();
  fill(126,135,182);
  stroke(111,119,161);
  rect(x,y,w,h);
  pop(); //rectButton
  
  push();
  fill(117,201,155);
  stroke(90,156,120);
  ellipseMode(RADIUS);
  ellipse(circleX,circleY,radius,radius);
  pop(); //circButton
  
  
    if (mouseIsPressed){
      if(mouseX>x && mouseX <x+w && mouseY>y && mouseY <y+h){
        push();
        noStroke();
        fill(153,17,114);
        rectMode(CENTER);
        rect(250,200,390,245);
        pop(); //TVscreen
    }
    }
  
  push();
  ellipseMode(CENTER);
  noStroke();
  fill(25);
  ellipse(ballX,ballY,20,20);
  pop(); //hiddenBall
  
  ballX = ballX + speed;
  ballY = ballY + speed1;
  
  if (ballX >= 435){
    speed = -1;
  } if (ballX <= 65){
    speed = +1;
  } if (ballY >= 315){
    speed1 = -1;
  } if (ballY <= 87){
    speed1 = +1;
  } //bouncyControls
  
  if (mouseIsPressed){
    if (dist(mouseX,mouseY,circleX,circleY) < radius){
      push();
      stroke(0,255,0);
      strokeWeight(3);
      point(250,330);
      pop(); //"ON"TVlight
    }
    }   
  
  text("ON?",387,475);
  text("HOLD",384,435);
  
}