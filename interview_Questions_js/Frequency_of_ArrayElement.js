/*Find and print the frequency of each element in an array.
5 5 3 3
Output:
5 appears 2 times
3 appears 2 times

userInput:
const data = require('fs').readFileSync(0, 'utf8');
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);
and comment let arr=[11,2,56,11,90,65,2,11,90,33,70,2];line

*/
let arr=[11,2,56,11,90,65,2,11,90,33,70,2];
let dcounter=0;
for(let i=0;i<arr.length;i++)
{
    let alreadyCounted = false;
    for (let k = 0; k < i; k++) 
    {
        if (arr[i] === arr[k]) 
        {
            alreadyCounted = true;
            break;
        }
    }
    if (alreadyCounted) {
        continue;
    }

    dcounter = 1; // Count occurrence
    for(let j=i+1;j<=arr.length-1;j++)
    {
        if(arr[i]===arr[j])
        {
            dcounter++;
        }
    }
    if(dcounter > 0)
    {
        console.log(`${arr[i]} appears ${dcounter} times`);
    }
    dcounter = 0;
}