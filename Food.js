class Food{
    constructor(){
        this.foodStock
        this.lastFed
    }
display(){
    var x = 80,y = 100;

    if (this.foodStock!== 0){
        for (var i = 0,i < foodStock i++){
            if (i%10 == 0){
                x = 80;
                y = y + 50;
            }
        }
    }
}
//places in a house
//bedRoom
//add here
bedRoom(){
    background(bedRoom,250,250);
}
//garden
//add here
garden(){
    background(garden,250,250);
}
//livingRoom
//add here
livingRoom(){
    background(livingRoom,250,250);
}
//washRoom
//add here
washRoom(){
    background(washRoom,250,250);
}

updateBckground(){

currentTime = hour();

if (currentTime === (lastFed+1)){
update("playing");
foodObj.garden();
}
else
if (currentTime === (lastFed+2)){
    update ("sleeping");
    foodObj.bedRoom();
}
else
 if (currentTime > (lastFed+2) && currentTime <= (lastFed+4)){
    foodObj.washRoom();
 }
 else {
     update("hungry");
     foodObj.display();
 }
}
}