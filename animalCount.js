var mile = 25;
var animal = 0;
if(mile<=10){
    animal = mile*50;
}
else if(mile<=20){
    firstPart = 10*50;
    newMile = mile-10;
    secondPart = newMile*100;
    animal = firstPart+secondPart;

}
else{
    firstPart = 10*50;
    secondPart = 10*100; 
    newMile = mile-20;
    thirdPart = newMile*300; 
    animal = firstPart+secondPart+thirdPart;

}
console.log(animal);