
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var angle1 = 60;
var angle2 = 10;
var angle3 = 100;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	var plane_options = {
		isStatic: true
	}

	var rotator_options = {
		isStatic: true
	}

	var particle_options = {
			restitution:0.4,
			friction:0.02
	}

	plane = Bodies.rectangle(800,10,400,700,plane_options);
	World.add(world,plane);

	block1 = Bodies.rectangle(350,200,100,10,plane_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(350,600,100,10,plane_options);
	World.add(world,block2);

	rotator1 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator1);

	rotator2 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator2);

	rotator3 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator3);

	particle1 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle1);
	
	particle2 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle2);

	particle3 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle3);
	
	particle4 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle4);

	particle5 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle5);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);

  Matter.Body.rotate(rotator1,angle1)
  push();
  translate(rotator1.positon.x,rotator1,position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  angle1 +=0.2;

  Matter.Body.rotate(rotator3,angle3)
  push();
  translate(rotator3.positon.x,rotator3,position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 +=0.2;

  Matter.Body.rotate(rotator2,angle2)
  push();
  translate(rotator2.positon.x,rotator2,position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();
  angle2 +=0.2;
  

  Engine.update(engine);
  
  drawSprites();
 
}



