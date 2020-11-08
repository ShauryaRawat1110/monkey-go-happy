
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var bannanaGroup

function preload(){
  
  
  monkey_running =   loadAnimation ("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png" , "sprite_5.png" , "sprite_6.png" , "sprite_7.png" , "sprite_8.png );    

 bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 


function setup() {
  
  
}


function draw() {
if (keydown(space))
  monkey.velocityY= -12;
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
}

function fruits(){
 if (frameCount % 80 === 0){
   var banana = createSprite(400,165,10,40);
   obstacle.velocityX = -6;
   
 var rand = Math.round(random(120,200));
    switch(rand) {
      case 1 : banana.addImage( banana )
    }
   
   function obstacles(){
     
   }
   var survivalTime
   stroke("white");
   textSize(20);
   fill("white");
   text("score: "+ score,500,50);
   
   stroke("black");
   textSize(20);
   fill("black");
   survivalTime=Math.ceil(frameCount/frameRate())
text("survival Time:"+ survivalTime, 100,50);   



