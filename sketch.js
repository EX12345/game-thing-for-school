//defines x and y of ball
let x = 300;
let y = 300;
///momentum of ball
let mx = 0;
let my = 0;
//whether or not it’s leashed
let leash = false;
//defines x and y of enemies and the number
const ex = [];
const ey = [];
let ec = 0;
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
  //makes enemy if there's less than a certain number, let's just set it to 2 for now
  if(ec < 2) {
    //extremely bad temporary solution for deftermining witch side it goes on, delete later
    let side = int(random(1,4));
    if (side == 1) {ex.push(random(0,600)); ey.push(0);}
    if (side == 2) {ex.push(600); ey.push(random(0,600));}
    if (side == 3) {ex.push(random(0,600)); ey.push(600);}
    if (side == 4) {ex.push(600); ey.push(random(0,600));}
    ec++
  }
  //enemy loop
  for(let i = 0; ec > i; i++) {
    circle(ex[i], ey[i], 10);
    eMovement(i);
    let d = dist(x,y,ex[i],ey[i]);
    if (d <= 15) {
    eDie(i)
    }
  }
  
}
//toggles leash
function mouseClicked() {
  if(leash){
    //sets momentum
    mx = x-(mouseX+x)*0.5;
    my = y-(mouseY+y)*0.5;
  }
 leash = !leash
}

function eMovement (i) {
   if(ex[i] > 300){ex[i]--;}
    else{ex[i]++;}
    if(ey[i] > 300){ey[i]--;}
    else{ey[i]++;}
}
function eDie (i) {
    ex.splice(i,1);
    ey.splice(i,1);
    ec--
    
}
