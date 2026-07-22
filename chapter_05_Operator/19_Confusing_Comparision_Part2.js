console.log("----Confusing Comparision Part 2----");
//------------------Null & Undefined-----------------
console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(null==0); // false
console.log(null===0); // false
console.log(null>=0);   // true Absence of value
console.log(null>0);   // false
console.log(null==0 || null>0);   // false but null >=0 is true