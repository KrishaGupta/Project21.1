
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var groundObj;
var leftSide, rightSide;


function setup() {
	createCanvas(1200, 900);


	engine = Engine.create();
	world = engine.world


groundObj=new Ground(width/2,670,width,20);
leftSide=new Ground(600,600,20,120);
rightSide = new Ground(900,600,20,120);

var ball_option={
	isStatic:false,
	restitution:0.3,
	friction:0.,
	density:1.2

}

	//Create the Bodies Here.

	ball = Bodies.circle(200,200,15,ball_option);
	World.add(world,ball);

	Engine.run(engine);

	rectMode(CENTER);
	ellipseMode(RADIUS);
  
}


function draw() {
  
  background(0);
  
  
  leftSide.display();
  groundObj.display();
  rightSide.display();
  Engine.update(engine);

  ellipse(ball.position.x , ball.position.y , 15,15);
  drawSprites();
}

function keyPressed(){

	if (keyCode=== UP_ARROW) {
		
		Matter.Body.applyForce(ball,{x:0, y:0},{x:4, y:-8});

	}
}

