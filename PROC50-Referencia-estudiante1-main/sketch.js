var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon1.png","assets/balloon1.png")
}

function setup(){

//Imagen de fondo
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//Crear bases superiores e inferiores
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//Crear globo      
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        
          //Hacer brincar el globo aerostático
          if(keyDown("space")) {
            balloon.velocityY= -3 ;
            
          }

          //Añadir gravedad
           balloon.velocityY = balloon.velocityY+2
   
        drawSprites();
        
}
