const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var stones = []
var ground,leftWall,rightWall;
var bridge;

var joinPoint,joinLink;



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Ground(width/2,height-10,width,20,"brown");
  leftWall = new Ground(300,height/2+50,100,300,"green");
  rightWall = new Ground(width-300,height/2+50,100,300,"green");
  bridge = new Bridge(15,{x:width/2 - 400, y:height/2})

  joinPoint = new Ground(width-400,height/2+10,40,20,"yellow");
  Matter.Composite.add(bridge.body,joinPoint);

  joinLink = new Link(bridge,joinPoint);

  for(var i = 0; i< 8; i++){
    var x = random(width/2 - 200, width/2 + 150);
    var y = random(-10, 140);
    var stone = new Stone(x,y,80);
    stones.push(stone);
  }

}

function draw() {
  background(51);
  Engine.update(engine);



  for(var stone of stones){
    stone.display();
  }
 
  ground.display();
  leftWall.display()
  rightWall.display()
  bridge.show();
  

}
