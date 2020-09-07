//Create variables here
var dog;
var happyDog;
var food;
var foodStock;
var fedTime;
var lastFed;
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

  feed = createButton("Feed the dog");
  feed.position(350,95);
  feed.mousePressed(feedDog);

  addFood = createButton("add food");
  addFood.position(350,100);
  addFood.mousePressed(addFood);
  
}


function draw() {
  background(46,139,87);
  fedTime = database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed = data.val();
  });
   if (lastFed>= 12){
     text("Last feed" + lastFed%12 + "PM",350,30);
   }
     else if(lastFed === 0){
       text("Last feed : 12 AM",350,30);
     }
       else {
         text("Last feed : " + lastFed + "AM",350,30);
       }
     
   
 
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

//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  database.ref('/').update({
    Food : foodObj.getFoodStock(),
    fedTime : hour()
  })
}

//function to add food in stock
function addFood(){
  food++;
  database.ref('/').update({
    Food : food
  })
}





