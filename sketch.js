var hr;
var mn;
var sc;

function setup() {
createCanvas(500,500);
angleMode(DEGREES)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  
  translate(300,300);
  rotate(-90)
  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0)
  pop();
  push();
  rotate(mnAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,75,0)
  pop();
  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,50,0)
  pop();
  noFill();
  strokeWeight(10);
  //Seconds
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);
  //Minutes
  stroke(0,255,0);
  arc(0,0,280,280,0,mnAngle);
  //Hour
  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle);
}