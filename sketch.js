const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(480,800);
  createSprite(400, 200, 480, 800);
  

  
  

  ground=new Ground(200,200,480,15);


}

function draw() {
  background(255,255,255);
  ground.display();  
  drawSprites();
}