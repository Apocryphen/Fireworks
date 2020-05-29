function Particle(x,y,vx,vy, g){
  this.pos = createVector (x,y);
  this.vel = createVector (vx, vy);
  
  if(g){this.g = createVector(0,g);}
  else{this.g = createVector(0,0.5);}
  
  this.show = function(col){
    strokeWeight(5);
    stroke(col)
    point (this.pos.x, this.pos.y);
  }
  this.update = function(col){
    this.physics();
    this.show(col);
  }
  this.physics = function(){
    this.vel.add(this.g);
    this.pos.add(this.vel);
  }
}