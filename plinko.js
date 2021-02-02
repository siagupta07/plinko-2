class Plinko {
    constructor(x,y) {
      var options = {
          friction:1,
          density:1,
          isStatic:true

      }
      this.body = Bodies.circle(x,y,10,options);
      this.r = 10;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     push();
     translate(pos.x,pos.y)
     rotate(this.body.angle)
     fill("lightblue")
     ellipseMode(RADIUS)
     ellipse(0,0,this.r,this.r)
     pop();
    }
  };
