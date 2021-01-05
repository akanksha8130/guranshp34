const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint
const Mouse = Matter.Mouse


function setup(){
	createCanvas(1600, 1000);
	var canvas= createCanvas(windowWidth / 2 , windowHeight / 2);
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse : canvasmouse
	};
	mConstraint = MouseConstraint.create(engine,options);
	World.add(world , mConstraint)
  

	ground=createSprite(240,380,windowWidth/1.5,windowHeight/50)
	
	//roof=createSprite(210,30,windowHeight/50,windowWidth/40)


	pendulum1=new Pendulum(150,100,"yellow")
	pendulum2=new Pendulum(190,100,"yellow")
	pendulum3=new Pendulum(230,100,"yellow")
	pendulum4=new Pendulum(270,100,"yellow")
	pendulum5=new Pendulum(310,100,"yellow")

	sling1=new Slingshot(pendulum1.body,{x:150,y:30})
	sling2=new Slingshot(pendulum2.body,{x:190,y:30});
	sling3=new Slingshot(pendulum3.body,{x:230,y:30})
	sling4=new Slingshot(pendulum4.body,{x:270,y:30});
	sling5=new Slingshot(pendulum5.body,{x:310,y:30});



}
function draw(){
	background("black");
	Engine.update(engine);






	pendulum1.display();
	pendulum2.display();
	pendulum3.display();
	pendulum4.display();
	pendulum5.display();

	sling1.display();
	sling2.display();
	sling3.display();
	sling4.display();
	sling5.display();

	ground.display();

	
	//roof.display();

	drawSprites();
}
function mouseDragged(){
	Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY})
}







