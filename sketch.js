
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var roof1,bob1,bob1,bob3,bob4,bob5,rope1,rope2,rope3, rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	//Engine.run(engine);

	roof1=new roof(400,250,300,20)

	bob1=new bob(280,450,30)
	bob2=new bob(340,450,30)
	bob3=new bob(400,450,30)
	bob4=new bob(460,450,30)
	bob5=new bob(520,450,30)

	rope1=new rope(bob1.body,roof1.body,-30*4,0)
	rope2=new rope(bob2.body,roof1.body,-30*2,0)
	rope3=new rope(bob3.body,roof1.body,0,0)
	rope4=new rope(bob4.body,roof1.body,30*2,0)
	rope5=new rope(bob5.body,roof1.body,30*4,0)
  
}


function draw() {
  
  rectMode(CENTER);
  background(255);

  Engine.update(engine);
  

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	roof1.display();
	
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	drawSprites();


}

function keyPressed (){

if ( keyCode === UP_ARROW){
	
	//Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-75,y:-83})
	Matter.Body.applyForce(rope1.body,rope1.bodyA.position,{x:75,y:-83})
}
}





