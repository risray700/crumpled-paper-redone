
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,ground1;  
var wall1,wall2,wall3,wall4; 


function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	paper1 = new Paper(200,200,20,20);
	ground1 = new Ground(200,300,800,20);
	wall1 = new Wall(550,290,50,10);
	wall2 = new Wall(525,265,10,50);
	wall3 = new Wall(575,265,10,50);
	
}


function draw() {
  rectMode(CENTER);
  background("white");
  
	console.log(paper1.x);

	paper1.display();
	ground1.display();
	wall1.display();
	wall2.display();
	wall3.display();
	

  if(keyDown("UP_ARROW")){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:4,y:-4});
  }
 
  if(keyDown("DOWN_ARROW")){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:-4,y:-4});
  }
 

}



