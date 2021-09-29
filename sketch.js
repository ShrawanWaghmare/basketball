const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ball, box ;

var backgroundImg , gameOver, restart;

var ground;

var log1, box1;

var slingshot;

var gameState = "PLAY";

var score = 0;

var boy;

var turns = 0; 



function preload(){
backgroundImg = loadImage('images/background.jpg');

boy = loadImage('images/boy.png');
boy2 = loadImage('images/boy2.png');
gameOver = loadImage('images/gameOver.png')
restart = loadImage('images/reset.png');
}



function setup(){
createCanvas(1400,700);

engine = Engine.create();
world = engine.world;

ground = new Ground(700, height, 1400, 20);

ball = new Ball(300,180,40);

hoop = new Hoop(1100, 670);







slingshot = new SlingShot(ball.body,{x:200, y:280});



score = 0

}


function draw(){
    background(backgroundImg);
    Engine.update(engine);

    fill("black");
    textSize(30);
    stroke("white");
    strokeWeight(20);
    text("Score :" + score,190,100);

    
    textSize(30);
    text("Turns :" + turns,190,180);    
    
     
    image(boy, 100, 240, 330,400)
  
    if(gameState === "PLAY"){

        if(ball.body.position.x > 1000 && ball.body.position.x < 1175 && ball.body.position.y > 240 && ball.body.position.y < 325){
            score = score + 1;
        }
    
        
        mouseDragged();
        mouseReleased();
        keyPressed();


       
          

    }
    

    //if(turns === 10){
      //  gameState = "END";
    //}

    else if(gameState === "END"){
        image(gameOver, 550, 350);

        
    }
    

    ground.display();
    ball.display();
    hoop.display();
    slingshot.display();

    if(keyCode === 114 && gameState === "END") {
        reset();
      }
    
    
    }

    function mouseDragged(){
        //if (gameState!=="launched"){
            Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
        //}
    }
    
    
    function mouseReleased(){
        slingshot.fly();
        turns = turns + 1;

    }

    function keyPressed(){
        if(keyCode === 32){ 
           ball.trajectory = []; 
           Matter.Body.setPosition(ball.body, {x:200 , y:50})
           slingshot.attach(ball.body);
           
        }
    
    }

    function reset(){
        gameState = "PLAY";
       gameOver.visible = false;
       score = 0;
       turns = 0;
    }
    