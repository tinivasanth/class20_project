var bg
var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;
function preload() {
    //load the images here
    bg = loadImage("images/garden.png");

    //check the image names are matching with the one given to you
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(750,650);

//cat.addAnimation("cat_sitting",catImg1);
//cat.addAnimation("cat_running",catImg2);
//cat.addAnimation("cat_happy",catImg3);

//only add cat sleeping image in set up
cat.scale = 0.1;

//creating mouse sprites
mouse = createSprite(200,650);
//only add mouse standing image

//mouse.addAnimation("mouse_cheese",mouseImg1);
//mouse.addAnimation("mouse_teasing",mouseImg2);
//mouse.addAnimation("mouse_detective",mouseImg3)
mouse.scale = 0.1;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
        {
            //changing animations for cat
            cat.addAnimation("cat_happy",catImg3);
            cat.changeAnimation("cat_happy");
            cat.velocityX = 0;
            //add x position of cat

            //changing animations for mouse
            mouse.addAnimation("mouse_detective",mouseImg3);
            mouse.changeAnimation("mouse_detective");
}
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
if(keyDown(LEFT_ARROW)){
mouse.addAnimation("teasing",mouseImg2);
mouse.frameDelay = 35;
mouse.changeAnimation("mouse_teasing");
// writing code for moving cat
cat.velocityX = -5
cat.addAnimation("running",catImg2);
cat.changeAnimation("running");
}

}
