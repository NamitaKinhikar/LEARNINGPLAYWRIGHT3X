console.log(username);  
//it will give reference error because let and const are not hoisted like var. 
// They are in a temporal dead zone until they are declared.
let username = "Dutta";
console.log(username);