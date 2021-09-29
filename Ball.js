class Ball {
    constructor(x,y,r){
        var options = {
            restitution: 0.7,
            density: 4,
            friction: 0.5,
            
            
        }
        this.x = x;
        this.y = y;
        this.r = r;

        this.image = loadImage("images/ball.png");
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);

        this.smokeImage = loadImage("images/smoke.png");
        this.trajectory =[];
        World.add(world,this.body);
    }

    display(){
        var ballPos = this.body.position;
        push()
        translate(ballPos.x, ballPos.y);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image,0,0,this.r*2,this.r*2);
        pop()

        if(this.body.velocity.x > 10 && this.body.position.x > 200){
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);
          }
         
      
          for(var i=0; i<this.trajectory.length; i++){
            image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
          }
    }

}