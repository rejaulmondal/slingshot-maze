var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        Events = Matter.Events,
        Constraint = Matter.Constraint,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Bodies = Matter.Bodies;

var ground, ground2;
var ball;
var slingshot;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;
var box10;
var box11;
var box12;
var box13;
var box14;
var box15;
var box16;
var box17;
var box18;

var gameState = "onSling";

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,380,8000,40);
    ground2 = new Ground(600,200,200,20);

    ball = new Box(80,300,40,40); 

    slingshot = new SlingShot(ball.body,{x:150,y:250});

    box1 = new Box(600,180,30,50);
    box2 = new Box(570,180,30,50);
    box3 = new Box(550,180,30,50);
    box4 = new Box(630,180,30,50);
    box5 = new Box(600,120,30,50);
    box6 = new Box(570,120,30,50);
    box7 = new Box(550,120,30,50);
    box8 = new Box(600,70,30,50);
    box9 = new Box(570,70,30,50);
    box10 = new Box(570,20,30,40);
    box11 = new Box(600,370,30,40);
    box12 = new Box(570,370,30,40);
    box13 = new Box(550,370,30,40);
    box14 = new Box(630,370,30,40);
    box15 = new Box(600,320,30,40)
    box16 = new Box(570,320,30,40)
    box17 = new Box(580,270,30,40)
}

function draw(){
    background(225);
    Engine.update(engine);

    ground.display();
    ground2.display();

    ball.display();

    slingshot.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();

    console.log(gameState);

}

function mouseDragged(){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
   slingshot.fly();
   gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && ball.body.speed < 2){
       Matter.Body.setPosition(ball.body,{x:150, y:250});
       slingshot.attach(ball.body);
    }
}