
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5; 
var roof1, diameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	diameter = 40

	//Create the Bodies Here.
	roof1 = new ground(width/2, height/4, width/3, 20);

	bob1 = new bob((width/2)-diameter*2, height/4+500);
	bob2 = new bob((width/2)-diameter*1, height/4+500);
	bob3 = new bob((width/2), height/4+500);
	bob4 = new bob((width/2)-diameter*-1, height/4+500);
	bob5 = new bob((width/2)-diameter*-2, height/4+500);

	rope1 = new chain(roof1.body, bob1.body, -diameter*2, 0)
	rope2 = new chain(roof1.body, bob2.body, -diameter*1, 0)
	rope3 = new chain(roof1.body, bob3.body, 0, 0)
	rope4 = new chain(roof1.body, bob4.body, -diameter*-1, 0)
	rope5 = new chain(roof1.body, bob5.body, -diameter*-2, 0)
	Engine.run(engine);
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(255);
  drawSprites();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}



function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -50, y: -30})
	}
}

