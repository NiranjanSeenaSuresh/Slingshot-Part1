const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var b1,b2,b4,b5,b6,b7,b8,b9,b10;
var ball, ground, slingShot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    b1 = new Box(600,200,50,50);
    b2 = new Box(610,200,50,50);
    b3 = new Box(590,200,50,50);
    b4 = new Box(580,200,50,50);
    b5 = new Box(605,210,50,50);
    b6 = new Box(595,210,50,50);
    b7 = new Box(585,210,50,50);
    b8 = new Box(590,220,50,50);
    b9 = new Box(600,220,50,50);
    b10 = new Box(595, 230, 50,50);

    ball = new Ball(200,150);

}

function draw(){

Engine.update(engine);
strokeWeight(4);
ground.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();

ball.display();
slingShot.display();

}

function mouseDragged(){

    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
        
    }
    function mouseReleased(){
    
    slingShot.fly()
    
    ball = new Ball(200,150)
    }