const data = require('fs').readFileSync(0, 'utf8');
//console.log(data);
let sides = data.trim().split(" ").map(Number);
const [a, b, c] = sides;
//let side1 = sides[0];
//let side2 = sides[1];
//let side3 = sides[2];
// Write your solution here
//const a = sides[0];
//const b = sides[1];
//const c = sides[2];

if (a === b &&  b===c)
{
    console.log("Equilateral");
}
else if (a === b || b === c || a === c)
{
    console.log("Isosceles");
}
else
{
    console.log("Scalene");
}