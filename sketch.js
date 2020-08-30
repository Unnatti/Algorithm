var fixedrect, movingrect;

function setup() {
createCanvas(1200,800);
  fixedrect = createSprite(600, 400, 50, 80);
  movingrect = createSprite(400, 200, 80, 30);
}

function draw() {
  background("black");  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
 && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
 && movingrect.y-fixedrect.y<fixedrect.width/2+movingrect.width/2
 && fixedrect.y-movingrect.y<fixedrect.width/2+movingrect.width/2){
movingrect.shapeColor = "red";
fixedrect.shapeColor = "red";
  }
  else{
    movingrect.shapeColor = "green";
fixedrect.shapeColor = "green";
  }
  drawSprites();
}