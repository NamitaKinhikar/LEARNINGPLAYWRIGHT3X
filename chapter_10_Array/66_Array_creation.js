//array literals covered
let browsers=["CHrome" ,"Firefox", "Safari"];

//Array constructor
let scores= new Array(3); //create new array with length-3  for fix size
scores[0]="1";//likewise

let scores1= new Array(1,2,3);// new array

let numbers= new Array(100, 200, 300, 400);

let tests= Array.of(10 , 20, 30, 40, 50);
console.log(tests.length); //5

//Array.from()--> Break down into characters

let chars=Array.from("Hello");
console.log(chars);  // [ 'H', 'e', 'l', 'l', 'o' ]