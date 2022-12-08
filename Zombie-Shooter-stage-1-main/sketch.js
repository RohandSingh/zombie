 var bg, bgimg
var player,playerimg
 var shooter

 function preload() {
    bgimg=loadImage("/assets/bg.jpeg")
    playerimg = loadImage("/assets/shooter_2.png")
    shooter = loadImage("/assets/shooter_3.png")
   zombieeimg = loadImage("/assets/zombie.png")
   heart1img = loadImage("/assets/heart_1.png")
   heart2img = loadImage("/assets/heart_2.png")
   heart3img = loadImage("/assets/heart_3.png")
 }
 
 

 function setup() {
    createCanvas(windowWidth, windowHeight)
    
    //creating background
    bg = createSprite(displayWidth/2, displayHeight/2, 20,20)
    bg.addImage(bgimg)
    bg.scale = 1.5
    

    player = createSprite(200,600, 10,10)
    player.addImage(playerimg)
    player.scale = 0.2

    //CREATING GROUP FOR ZOMBIES
    zombieeGroup = new Group();
    //displaying life pictures

    heart1 = createSprite(50,50,20,20)
    heart1.addImage(heart1img)
    heart1.scale = 0.3
    heart1.visible = false
    heart2 = createSprite(70,50,20,20)
    heart2.addImage(heart2img)
    heart2.scale = 0.3
    heart2.visible = false
    heart3 = createSprite(100,50,20,20)
    heart3.addImage(heart3img)
    heart3.scale = 0.3
    heart3.visible = true
 }




function draw(){
//background("red")
//moving player
if(keyDown("UP_ARROW")) {
player.y -=30
}

if(keyDown("DOWN_ARROW")) {
player.y +=30
}

if(keyDown("LEFT_ARROW")) {
player.x -=30

}

if(keyDown("right_arrow")) {
player.x +=30


}
if(keyWentDown("SPACE")) {
player.addImage(shooter)


}

if(keyWentUp("SPACE")) {
  player.addImage(playerimg)



}

//calling function
zombie();

//destroy zombie when player touch
if(zombieeGroup.isTouching(player)) {
  for(i=0; i<zombieeGroup.length; i++) {
    if(zombieeGroup[i].isTouching(player)) {
       zombieeGroup[i].destroy();
    }
  }
}

drawSprites();
}
//create zombies

function zombie() {
 if(frameCount%70 == 0) {                                           
  zombiee = createSprite(windowWidth-50 ,200,20,20)
  zombiee.addImage(zombieeimg)
  zombiee.scale = 0.2
  zombiee.velocityX = -3
  zombiee.x = Math.round(random(800,1100))
  zombiee.y = Math.round(random(100,500))
  zombiee.lifetime = 400
  //adding group
  zombieeGroup.add(zombiee)
 }
}

