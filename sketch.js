//defines x and y of ball
let x = 300;
let y = 300;
///momentum of ball
let mx = 0;
let my = 0;
//whether or not it’s leashed
let leash = false;
//setup i didn’t do anything w/
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  circle(x,y,20);
  if(leash){
  x = (mouseX+x)*0.5;
  y = (mouseY+y)*0.5;
  }
  else{
    //moves ball according to momentum
    x = x - mx;
    y = y - my;
  }
}
//switches leash
function mouseClicked() {
  if(leash){
    leash = !leash
    //sets momentum
    mx = x-(mouseX+x)*0.5;
    my = y-(mouseY+y)*0.5;
  }
 leash = !leash
}
