const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground;

function setup(){
    var canvas = createCanvas(00,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(320,50,160,20);
    box2 = new Box(320,70,160,20);
    box3 = new Box(320,90,160,20);
    box4 = new Box(320,110,160,20);
    box5 = new Box(320,130,160,20);
    box6 = new Box(230,90,20,80);
    box7 = new Box(160,50,160,20);
    box8 = new Box(190,70,60,20);
    box9 = new Box(190,90,60,20);
    box10 = new Box(190,110,60,20);
    box11 = new Box(160,130,160,20);
    ground = new Ground(200,380,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
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
   ground.display();
}