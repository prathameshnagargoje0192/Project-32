const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12, block13, block14;
var block15, block16, block17, block18, block19, block20, block21, block22;

var ground1, ground2, ground3;

var chain;
var hex;
var ball;
var polygonImg;
var backgroundImg;
var score1=0;

function preload() {

  polygonImg = loadImage("hexagon (1).png");
  getBackgroundImg();
}

function setup() {

  createCanvas(1600,600);
  engine = Engine.create();
  world = engine.world;

  
  strokeWeight(2);

  block1 = new Block(600, 260, 30, 40);
  block2 = new Block(570, 260, 30, 40);
  block3 = new Block(540, 260, 30, 40);
  block4 = new Block(630, 260, 30, 40);
  block5 = new Block(660, 260, 30, 40);


  block6 = new Block(585, 220, 30, 40);
  block7 = new Block(555, 220, 30, 40);
  block8 = new Block(615, 220, 30, 40);
  block9 = new Block(645, 220, 30, 40);


  bolck10 = new Block(600, 170, 30, 40);
  block11 = new Block(570, 180, 30, 40);
  block12 = new Block(630, 180, 30, 40);


  block13 = new Block(600, 140, 30, 40);

  ground1 = new Ground(600,300,200,10);
  ground2 = new Ground(900, 200, 200, 10);
  ground3 = new Ground(750, 600, 1500, 20);


  block14 = new Block(900, 170, 30, 40);
  block15 = new Block(930, 170, 30, 40);
  block16 = new Block(870, 170, 30, 40);
  block17 = new Block(840, 170, 30, 40);
  block18 = new Block(960, 170, 30, 40);


  block19 = new Block(900, 140, 30, 40);
  block20 = new Block(930, 140, 30, 40);
  block21 = new Block(870, 140, 30, 40);
  block22 = new Block(900, 110, 30, 40);

  polygon= new Polygon(55, 190, 30, 30);

  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);

  chain = new Chain(this.ball,{x:150, y:160});

}

function draw() {
  if(backgroundImg){


    background(backgroundImg);
}




 

  Engine.update(engine);

  push();
  stroke("red");
  strokeWeight(4);
  textSize(30);
  fill("blue")
  text("Drag the Polygon  and release to launch !!", 80, 50);
  pop();

  push();
  stroke("red");
  strokeWeight(3);
  textSize(20);
  fill("black");
  text("Press Space to Play Secound Chance !!", 100,90);
  pop();


push();
  fill("black");
textSize(20);
  text("Score:"+score1,100,120);
  pop();
  
 
  fill("red");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block1.score();
  block2.score();
 block3.score();
  block4.score();
  block5.score();

  fill("red");
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block6.score();
  block7.score();
  block8.score();
  block9.score();

  fill("lightpink");
  bolck10.display();
  block11.display();
  block12.display();
  //block10.score();
 // block11.score();
 // block12.score();

  fill("lightpink");
  block13.display();
  //block13.score();

  fill("green");
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
 // block14.score();
 // block15.score();
 // block16.score();
  //block17.score();
 // block18.score();

  fill("lightGreen");
  block19.display();
  block20.display();
  block21.display();
 // block19.score();
 // block20.score();
 // block21.score();

  fill("lime");
  block22.display();
  //block22.score();

  ground1.display();
  ground2.display();
  ground3.display();

 
  
  
 
  
  
 
  





  imageMode(CENTER);
  image(polygonImg, ball.position.x, ball.position.y, 50, 45);

  chain.display();

 
}


function mouseDragged() {

  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});

}


function mouseReleased() {

  chain.fly();

}


function keyPressed() {
   if(keyCode===32) {
      Matter.Body.setPosition(this.ball,{x:85,y:200})
       chain.attach(this.ball); } 
      }

      async function getBackgroundImg(){
        var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON=await response.json();
        var datetime=responseJSON.datetime;
        var HOUR=datetime.slice(11,13);
        if(HOUR>=06 && HOUR<18){
            bg="sprites/bg.jpg";
        }
    
        else{ 
            bg="sprites/bg2.jpg";
        }
        backgroundImg=loadImage(bg);
    }
    