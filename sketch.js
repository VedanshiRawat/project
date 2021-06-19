var cat1, cat2, cat3, cat4;
var mouse1, mouse2, mouse3, mouse4, garden;

function preload() {
    //load the images here
    cat1Image = loadImage("cat1.png")
    cat2Image = loadImage("cat2.png")
    cat3Image = loadImage("cat3.png")
    cat4Image = loadImage("cat4.png")

    mouse1Image = loadImage("mouse2.png")
    mouse2Image = loadImage("mouse1.png")
    mouse3Image = loadImage("mouse3.png")
    mouse4Image = loadImage("mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     
}

function draw() {

    background(255);
    backgroundImg("images/garden.png");

    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse1.x <(cat.width- onmousedown.width)/2){
        
    }



    drawSprites();
}


function keyPressed(){



    

  //For moving and changing animation write code here
  cat.addAnimation("catLastImage",catImg3)
  cat.changeAnimation("catLastImage")


}
