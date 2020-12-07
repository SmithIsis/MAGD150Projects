function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('#00005F');
  
  push();
  colorMode(HSL);
  let a = color('#122295');
  fill(a);
  noStroke();
  beginShape();
    vertex(200,50);
    vertex(450,150);
    vertex(400,300);
    vertex(300,450);
    vertex(100,450);
    vertex(50,300);
    vertex(100,100);
  endShape(CLOSE);
  pop(); //bottom color
  
  push();
  colorMode(RGB);
  let b = color(18,120,100,80);
  fill(b);
  noStroke();
  beginShape();
    vertex(350,50);
    vertex(450,220);
    vertex(350,300);
    vertex(450,450);
    vertex(300,400);
    vertex(200,475);
    vertex(50,400);
    vertex(100,250);
    vertex(30,250);
    vertex(155,60);
    vertex(275,100);
  endShape(CLOSE);
  pop(); //second layer
  
  push();
  colorMode(HSB);
  let c = color(227,65,61,80);
  fill(c);
  noStroke();
  triangle(320,50,325,475,30,375);
  pop(); //third
  
  push();
  colorMode(HSB);
  let d = color(213,72,67,50);
  fill(d);
  noStroke();
  triangle(50,50,450,300,95,475);
  pop(); //fourth
  
  push();
  colorMode(HSB,360,100,100,100);
  noFill();
  stroke(168,100,65);
  bezier(75,375,175,175,325,275,400,100);
  pop(); //space wave
  
  push();
  colorMode(HSL);
  strokeWeight(3);
  stroke('#1DB4DE');
  beginShape(POINTS);
    vertex(50,350);
    vertex(100,375);
    vertex(100,400);
    vertex(50,375);
  endShape(CLOSE);
  beginShape(POINTS);
    vertex(375,75);
    vertex(425,78);
    vertex(423,130);
    vertex(376,122);
  endShape(CLOSE);
  beginShape(POINTS);
    vertex(234,204);
    vertex(267,208);
    vertex(272,267);
    vertex(219,272);
  endShape(CLOSE);
  beginShape(POINTS);
    vertex(105,307);
    vertex(167,296);
    vertex(158,327);
    vertex(87,335);
  endShape(CLOSE);
  beginShape(POINTS);
    vertex(321,171);
    vertex(364,173);
    vertex(317,205);
    vertex(348,192);
  endShape(CLOSE);
  beginShape(POINTS);
    vertex(150,250);
    vertex(180,250);
    vertex(180,278);
    vertex(140,265);
  endShape(CLOSE);
  pop(); //star dust
  
  push();
  colorMode(HSB);
  let e = color(187,74,52,75);
  fill(e);
  noStroke();
  beginShape();
    vertex(0,0);
    vertex(75,0);
    vertex(35,15);
    vertex(50,43);
    vertex(15,37);
    vertex(0,75);
  endShape(CLOSE);
  pop(); //top left flare
  
  push();
  colorMode(HSB);
  let f = color(189,56,70,50);
  fill(f);
  noStroke();
  beginShape();
    vertex(330,500);
    vertex(355,482);
    vertex(350,450);
    vertex(375,475);
    vertex(400,450);
    vertex(397,487);
    vertex(425,500);
  endShape(CLOSE);
  pop(); //bottom flare
  
  push();
  colorMode(HSB);
  stroke(162,83,30);
  strokeWeight(2);
  let g = color(162,83,58);
  fill(g);
  ellipse(150,100,40,40);
  pop(); //planet
  
  push();
  colorMode(HSB);
  let h = color(162,83,50);
  fill(h);
  noStroke();
  ellipse(155,95,15,15);
  pop(); //planet detail
  
  push();
  colorMode(HSB);
  stroke(2,84,20);
  strokeWeight(2);
  let i = color(2,84,40);
  fill(i);
  ellipse(150,450,65,65);
  pop(); //planet 2
  
  push();
  colorMode(HSB);
  let j = color(2,84,50);
  fill(j);
  noStroke();
  ellipse(140,460,25,25);
  pop(); //planet detail 2
  
  push();
  colorMode(HSB);
  let k = color(305,80,32);
  stroke(305,80,15);
  strokeWeight(3);
  fill(k);
  ellipse(400,350,45,45);
  pop(); //planet 3
  
  push();
  colorMode(HSB);
  let l = color(305,62,49);
  noStroke();
  fill(l);
  ellipse(410,355,15,15);
  pop(); //planet detail 3
  
}