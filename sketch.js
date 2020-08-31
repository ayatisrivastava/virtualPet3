//Create variables here
var dog;
var happyDog;
var food;
var foodStock;
var database;

function preload(){
  //load images here
 dogImg = loadImage("images/dogImg.png");
 happyDogImg = loadImage("images/dogImg1.png"); 
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(270,250,20,50);
 // this.image = loadImage("images/dogImg.png")
  foodStock = database.ref('food');
  foodstock.on("value",readStock)
  
  
}


function draw() {
  background(46,139,87);
  if (keyWentDown(UP_ARROW)){
    writeStock(food);
    dog.addImage(happyDog);
  }
  text("Note:Press UP_ARROW key to feed the dog")
    textSize(5)
    fill("white")
    stroke("black")
     drawSprites();
  //add styles here
}  

//Functions to read values from database
function readStock(data){
  food = data.val();
} 

//Function to write value in database
function writeStock(data){
  if (x <= 0){
    x = 0;
  }
  else{
    x = x-1;
  }
  database.ref('/').update({
    food:x
  })
}





