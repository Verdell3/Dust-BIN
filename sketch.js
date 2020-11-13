
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paperObject
var ground
var dustbin
var engine,world

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	engine = Engine.create();
	world = engine.world;
	dustbin=new DustBin(1500,650);
	paperObject=new Paper(200,450,40);
	ground=new Ground(width/2,670,width,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperObject.display();
  ground.display();
  dustbin.display();
 
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:100,y:-100})
	}
}

