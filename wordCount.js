var mySelf = "My name is Md.  Rashedul Hasan."
var count = 0;
for(var i=0; i<mySelf.length; i++){
    var checker = mySelf[i];
    if( checker == " " && mySelf[i-1] != " "){
        count++;
    }
}
count++;
console.log(count);