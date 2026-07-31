//Write a Java program that prints a multiplication table for a given number using printf formatting.
const data = require('fs').readFileSync(0, 'utf8');//eg let a=5
// Write your solution here
let a = data;
for (let i = 1; i <= 10; i++)
{
    let mul = a * i;
    console.log(a + " x " + i + " = " + mul);
}