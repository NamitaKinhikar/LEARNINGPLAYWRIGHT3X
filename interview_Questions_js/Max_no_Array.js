/*const data = require('fs').readFileSync(0, 'utf8');
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);

// Write your solution here
let max = arr[0];
for (let i = 0; i <= n; i++)
{
    if (arr[i] > max)
    {
        max = arr[i];
    }
}
console.log(max);


const data = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const n = data[0];
const arr = data.slice(1, 1 + n);
// Write your solution here
let min = arr[0];
for (let i = 0; i < arr.length; i++)
{
    if (arr[i] < min)
    {
        min = arr[i];
    }
}
console.log(min);
*/
//Find and print the maximum element in an array of integers.


let arr=[12,37,90,65,86,45,13];// herein js we use squrebrackets to define array& not usr [] in the declaration part
let max=arr[0];
let min=arr[0];
for(let i=0;i<=arr.length-1;i++)
{
    if(arr[i]>max)
    {
        max=arr[i];
    }
   else if(arr[i]<min)
    {
        min=arr[i];
    }
}
console.log("maximum number in the array list is:",max);
console.log("minimum number in the array list is:",min);
