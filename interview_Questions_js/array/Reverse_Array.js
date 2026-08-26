/*
Case 1 - expected 5 4 3 2 1, got 5 4 3 2 1 ,   */
let arr=[90,12,76,33,12,15];
let revArr=[];
for(let i=arr.length-1;i>=0;i--)
{
    revArr.push(arr[i]);
}
console.log(revArr.join(" "));
   

/*
const data = require('fs').readFileSync(0, 'utf8');
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);
const revArr = [];
// Write your solution here
for (let i = arr.length - 1; i >= 0; i--)
{
    revArr.push(arr[i]);
}
console.log(revArr.join(" "));
*/