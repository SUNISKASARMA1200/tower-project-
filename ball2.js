class Box2 {
    constructor(x,y,w,h) {
      var options = {
        'restitution':0.5,
        'friction':1.0,
        'density':1.0
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w; 
      this.h = h;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(rgb(130,203,239));
    rect(pos.x, pos.y, this.w,this.h);
    }
  };