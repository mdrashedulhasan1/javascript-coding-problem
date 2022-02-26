var string = "123456789";
console.log(string);
var reverseString = "";
for(var i=0; i<string.length; i++){
    var preString = string[i];
    reverseString = preString+reverseString;
}
console.log(reverseString);