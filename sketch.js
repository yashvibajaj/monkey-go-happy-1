
 
var monkey , monkey_running;
var obstacleGroup, obstacleImage;
var foodGroup, bananaImage;
var survivalTime;
//var score;

function preload(){
  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png");
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
}

function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(80,350,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  console.log(ground.x);
  
  survivalTime = 0;
  
  obstacleGroup = new Group();
  foodGroup = new Group();
}


function draw() {
  background("white");
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  

  spawnObstacles();
  spawnFood();
  
  drawSprites();

  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount / frameRate());
  text("Survival Time: " + survivalTime, 100,50);
}

 function spawnFood() {
  if(frameCount % 80 === 0){
    var banana = createSprite(400,250,40,10);
    banana.y = random(120,200);
    banana.velocityX = -6;
    banana.addImage(bananaImage);
    banana.scale=0.05;
    banana.lifetime = 300;
    foodGroup.add(banana);
  }
}

function spawnObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(800,320,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.15; 
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
  }
}