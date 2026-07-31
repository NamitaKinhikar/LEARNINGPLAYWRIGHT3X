let nums=[10, 25, 30, 45];
let result=nums.find(x => x>20);   //25
console.log(result);// it will go to each an element 
//we can use temp also

//find Index
let index=nums.findIndex(n => n>20);   //1
console.log(index);

console.log(nums.findLast(temp => temp>20));  //45 it will give u a actual value
console.log(nums.findLastIndex(n => n>20));   //3- it will give u last index value