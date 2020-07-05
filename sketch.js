const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup(){
  createCanvas(800, 700);
  engine = Engine.create();
	world = engine.world;
  dustbin1 = new Dustbin();
	ball = new Ball(150,600,45);
  ground = new Ground(400,height,800,20);
  rope = new Rope(ball.body,{x:150,y:600});
}

function draw(){
  rectMode(CENTER);
    background("white");
    Engine.update(engine);
    ball.display();
 ground.display();
 dustbin1.display();
 rope.display();
}

function mouseDragged (){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased (){
rope.fly();
}