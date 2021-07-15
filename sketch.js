
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey=createSprite(80,290,20,20);
monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2
  
ground=createSprite(400,350,900,10);
  ground.velocityX=-3
  
FoodGroup= new Group ();
obstacleGroup= new Group();
  
}


function draw() {
background("white");
  if(ground.x<0){
    ground.x=400
  }
  
  if(keyDown("space")){
    monkey.velocityY=-10
  }
  monkey.velocityY=monkey.velocityY+0.8
  
  monkey.collide(ground);
  spawnfood()
  spawnobstacles()
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX=0
    monkey.velocityY=0
    obstacleGroup.setVelocityXEach(0)
    FoodGroup.setVelocityXEach(0)
    FoodGroup.setLifetimeEach(-1)
    obstacleGroup.setLifetimeEach(-1)
  }
  
    stroke("blue")
  textSize(20)
  fill("blue")
  survivalTime=Math.round(frameCount/frameRate())
  text("survivalTime "+survivalTime,100,50)
drawSprites()
  
}

function spawnfood () {
  if(frameCount % 80===0){
banana =createSprite(500,200,40,10);
  banana.addImage(bananaImage)
  banana.scale=0.05
    FoodGroup.add(banana)
  banana.velocityX=-4
}
}

function spawnobstacles () {
  if(frameCount % 100===0){
    obstacles=createSprite(700,320,10,40)
    obstacles.addImage(obstaceImage)
    obstacles.scale=0.15
    obstacleGroup.add(obstacles)
    obstacles.velocityX=-4
  }
}






