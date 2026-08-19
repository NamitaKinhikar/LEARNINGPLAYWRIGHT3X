// Primitive data types - call by value
// Primitive => number, string, boolean, null, undefined
let a = 10;
let b = a;
b = 99;
console.log(a);  // call by value  a=10
console.log(b);  //call by reference  b=a=10 but it will change by 99 then o/p is b=99
a = 90;
console.log(a);  //call by value a=90
console.log(b);  //b=10


console.log("-----")

// Objects — the reference value is copied, so both variables point to the same object.
// Reference - object, array, function
let obj1 = { val: 10 };
let obj2 = obj1;
obj2.val = 99;
//console.log(obj2.val);  //call by reference  obj2.val=99
console.log(obj1.val);