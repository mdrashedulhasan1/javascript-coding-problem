var nums = [23, 34, 45, 12, 23, 12, 23, 12, 23, 67];
var updateNums = [];
for(var i=0; i<nums.length; i++){
    var num = nums[i];
    var index = updateNums.indexOf(num);
    if( index == -1){
        updateNums.push(num);
    }

}
console.log(updateNums);