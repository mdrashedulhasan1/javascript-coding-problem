// using temp variable
// var a = 5;
// var b = 7;
// console.log("Before swap a=",a,"b=",b);
// var temp = a;
// a = b;
// b = temp;
// console.log("After swap a=",a,"b=",b);

//Without temp variable
// var a = 5;
// var b = 8;
// console.log("Before swap a=",a,"b=",b);
// a = a+b; //5+8 = 13
// b = a-b; //13-8 = 5
// a = a-b; //13-5 = 8
// console.log("After swap a=",a,"b=",b);

//Destructing
var a = 6;
var b = 7;
console.log("Before swap a=",a,"b=",b);
[a, b] = [b, a];
console.log("After swap a=",a,"b=",b);


