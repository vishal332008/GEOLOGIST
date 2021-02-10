
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    hammer1 = new Hammer(0, 0, 80, 40);
    iron1 = new Iron(150, 200, 50, 50);
    ground1 = new Ground(400, 690, 800, 20);
    rubber1 = new Rubber(300, 200, 50);
    stone1 = new Stone(450, 200, 50, 50);
    sand1 = new Sand(550, 50, 20);
    sand2 = new Sand(575, 50, 20);
    sand3 = new Sand(600, 50, 20);
    sand4 = new Sand(625, 50, 20);
    sand5 = new Sand(650, 50, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  hammer1.display();
  iron1.display();
  ground1.display();
  rubber1.display();
  stone1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  
  drawSprites();
 
}



