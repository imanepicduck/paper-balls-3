const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
//const Render = Matter.Render;
var dustBin;
var ground; 
var paper; 


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	dustBin = new Dustbin(700,320,70,70);
	ground = new Ground(700,320,70,70);
	paper = new Paper.ellipse(710, 400, 30, [10]); 
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustBin.display(); 
  ground.display(); 
  paper.display(); 

  keyPressed (); 
  slingShot.display();   
  drawSprites();
 
}

function keyPressed () {

	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body, {x:85, y:-85}); 
	}

}

function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x:mouseX, y:mouseY}); 
}

function mouseReleased(){
    slingShot.fly(); 
}

