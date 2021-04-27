const Engine = Matter.Engine;
const World=Matter.World;
const Bodies =Matter.Bodies;

var dot,engine,world;
function preload(){

}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  dot=new Ball(200,200,2)
 
 
}

function draw() {
  background(0);  
Engine.update(engine);
dot.display();
drawSprites();
}