class Block {

    constructor(x, y, width, height) {

        var options={
          restitution : 0.7,
          friction : 0.6,
          isStatic : false
        }
        this.Visibility=255;

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

      }

      display() {
        if(this.body.speed<5.5){
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0, 0, this.width, this.height);
          pop();
  

        }
        else{
          World.remove(world,this.body);
                  push();
                  this.Visibility=this.Visibility-5;
                 // tint(255,this.Visibility);
                 //rect(this.body.position.x,this.body.position.y,30,40);
                  pop();
            }

           
        }
        

        score(){
          if(this.Visibility<0 && this.Visibility>=-150){
            score1=score1+1;
          }
           }
          
       
      }

     