function preload(){
  snowImg=loadImage("snow4.webp");
  backgroundImg=loadImage("snow1.jpg");
  
}

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(backgroundImg);  
if (frameCount%50==0){
  snowflake=createSprite(random(0,1000),0,50,50);
  snowflake.velocityX=0;
  snowflake.velocityY=2;
  snowflake.addImage(snowImg);
  snowflake.scale=0.2;
}
  drawSprites();
}