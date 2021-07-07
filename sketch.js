var ship, shipAnimation;
var sea, seaImage;
function preload(){
  shipAnimation = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png",);

  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(200, 200, 400, 400);
  sea.addAnimation("sea", seaImage);
  sea.scale = 0.24;

  ship = createSprite(200, 250, 50, 50);
  ship.addAnimation("ship", shipAnimation);
  ship.scale = 0.2;

}

function draw() {
  background("blue");

  sea.velocityX=-1;

  if(sea.x<0){
    sea.x=200;
  }

  drawSprites();
}