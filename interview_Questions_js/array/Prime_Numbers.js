/*Write a program to check if a given number is prime. 
A prime number is only divisible by 1 and itself.

const data = require('fs').readFileSync(0, 'utf8');
const num = parseInt(data.trim(), 10);
// Write your solution here
let count = 0;
for (let i = 2; i < num; i++)
{
    if (num % i== 0)
    {
        count++;
    }
}
if (count == 0)
{
    console.log("YES");
}
else {
    console.log("NO");
}
    */

let num=13;
let count=0;
for(let i=2;i<num;i++)
{
    if(num%i==0)
    {
        count++;
    }
}
if (count == 0)
{
    console.log("YES");
}
else {
    console.log("NO");
}
