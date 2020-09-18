const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine , world ,ground;
var object , ball;
var static,bouncy;
function setup(){
  static = {isStatic:true};
  bouncy = {restitution:1}

  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  rectMode(CENTER);
  

  object = Bodies.rectangle(0,75,50,50);
  ball = Bodies.circle(200,140,20,bouncy);
  ground = Bodies.rectangle(200,380,400,10,static);

  World.add(world,object);
  World.add(world,ball);
  World.add(world,ground);

}

function draw(){
 background(0,0,0);
 
 Engine.update(engine);
 ellipseMode(RADIUS);
 rect(object.position.x,object.position.y,50,50);
 rect(ground.position.x,ground.position.y,400,10);

 ellipse(ball.position.x,ball.position.y,20,20)

 }