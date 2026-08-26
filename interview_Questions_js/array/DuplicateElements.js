/*Find and print all duplicate elements in an array.
Input
5
1 2 3 4 5
Output
No duplicates found*/
let arr=[1,2,3,4,5,1,2];
let duplicates = [];
for (let i = 0; i <= arr.length - 1; i++)
{
    for (let j = i + 1; j <= arr.length - 1; j++)
    {
        if (arr[i] === arr[j])
        {
            if(!duplicates.includes(arr[i]))
            {
             duplicates.push(arr[i]);    
            }
            break; // Exit inner loop once a duplicate is found           
        }
    }
}
if (duplicates.length === 0) 
{
    console.log("No duplicates found");
} 
else 
{
    console.log("Duplicate elements:", duplicates);
}
/*const data = require('fs').readFileSync(0, 'utf8');

const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);

const n = tokens[0];
const arr = tokens.slice(1, 1 + n);

let duplicates = [];

for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {

        if (arr[i] === arr[j]) {

            if (!duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }

            break;
        }
    }
}

if (duplicates.length === 0) {
    console.log("No duplicates found");
} else {
    duplicates.sort((a, b) => b - a);
    console.log(duplicates.join(" "));
}*/