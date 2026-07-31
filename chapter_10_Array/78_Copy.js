// Shallow Copy
// Original array will not change if you change the copy. 

let original = [1, 2, 3];
let copy1 = [...original]; // spread  
// console.log(original);  [1,2,3]
// console.log(copy1);

let copy2 = original.slice();
// console.log(copy2);          [1,2,3]

let copy3 = Array.from(original);
//  console.log(copy3);         [1,2,3]

let copy4 = original.concat();
// console.log(copy4);  

//----------------create a copy of an array--------------------------(All Functions)

console.log(" ---- ");
copy1.push(99);
console.log(original);//[1,2,3]
console.log(copy1); //[1,2,3,99]

// Deep cOPY
let deep_copy_array = original;  
// Deep copy

deep_copy_array.push(91);
console.log(original);  //[1,2,3,91]
console.log(deep_copy_array);