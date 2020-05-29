function Firework (x,y,vx,vy,col)
{
  this.pos = createVector (x,y);
  this.vel = createVector(vx,vy);
  this.col = col;
  
  this.self = new Particle(this.pos.x,this.pos.y,this.vel.x,this.vel.y)
  this.children = [];
  this.fade = 1000;
  this.exploded = false;
  
  this.update = function(){
    if(!this.exploded){
      this.self.update(this.col);
	  if(this.self.vel.y >= 0){this.explode();}
    }else{
      for (let c of this.children){
        this.col.setAlpha(map(this.fade, 0, 400, 0, 255));
        c.update(this.col);
      }
      this.fade -= deltaTime;
    }
  }
  this.explode = function(){
   for (let i = 0; i < 30; i++){
    this.children.push(new Particle (this.self.pos.x, this.self.pos.y,
                                     this.calculateHeartVel((2*PI*i)/30).x,
                                     this.calculateHeartVel((2*PI*i)/30).y,0.05)); 
   }
   this.exploded = true;
  }
  this.calculateHeartVel = function(rad){
     xEq = (16*pow(sin(rad),3))/8;
     yEq = -(13*cos(rad)-5*cos(2*rad)-2*cos(3*rad)-cos(4*rad))/8;
    return (createVector(xEq, yEq));
  }
}