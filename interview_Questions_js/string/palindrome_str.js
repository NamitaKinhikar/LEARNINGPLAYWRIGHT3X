/*Write a program to check if a given string is a palindrome 
(reads the same forwards and backwards).

const data = require('fs').readFileSync(0, 'utf8');
const str = data.split('\n')[0].toLowerCase();
// Write your solution here
let reverse = "";
for (let i = str.length- 1; i >= 0; i--)
{
    reverse = reverse + str[i];
}
if (str === reverse)
{
    console.log("YES");
}
else {
    console.log("NO");
}*/

let str="naman";
console.log("Original String is= ", str);

let rev="";
for(let i=str.length-1;i>=0;i--)
{
    rev = rev + str[i];
}
if(str===rev)
{
    console.log("Given String is Palindrome = "+rev);
}
else{
    console.log("Not palindrome")
}