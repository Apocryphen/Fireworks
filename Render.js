let fireworks = [];
let counter = 0;
let spawnTime = 400;
function setup() {
  createCanvas(800, 400);
  colorMode(HSB, 255);
}

function draw() {
  background(0,0,10,130);
  newFirework();
  for (let i = fireworks.length-1; i > 0; i--){
    fireworks[i].update();
    if(fireworks[i].fade <= 0) {fireworks.splice(i, 1);}
  }
}
function newFirework(){
  counter += deltaTime;
  if(counter > spawnTime){
    fireworks.push(new Firework(random(width),height, 0, random(-10, -20),
                                color(random(255), 255, 255 ,255)));
    spawnTime = random(400, 1000);
	counter = 0;
  } 
}