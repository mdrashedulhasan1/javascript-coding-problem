//Find the largest Element of an array
var ages = [23, 34, 46, 43, 46, 13];
var largeAge = ages[0];
for(var i=0; i<ages.length; i++){
    var element = ages[i];
    if(element>largeAge){
        largeAge = element;
    }
}
console.log(largeAge);