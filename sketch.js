var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
boyImg=loadAnimation("Runner-1.png","Runner-2.png")
pathImg=loadImage("path.png") 
 
}

function setup(){
  
  createCanvas(400,400);
 path=createSprite(200,200,400,20)
 path.addImage(pathImg)
path.scale=1.2;
path.velocityY=5

boy=createSprite(200,350,400,400)
boy.addAnimation("boy",boyImg)
boy.scale=0.08;


  
// create left Boundary
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible=false

//create right Boundary
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible=false
}

function draw() {
  background(0);
  path.velocityY = 4;
  boy.x=mouseX
  // boy moving on Xaxis with mouse
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(rightBoundary)
  boy.collide(leftBoundary)
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
