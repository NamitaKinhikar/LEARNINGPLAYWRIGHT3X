/*const data = require('fs').readFileSync(0, 'utf8');
const n = parseInt(data.trim(), 10);
// Write your solution here
const num = n;
for (let i = 1; i <= n; i++)
{
    let row = "";

    for (let j = 1; j <= i; j++)
    {
        row += "*";
    }

    console.log(row);
}*/


const n = 4;

for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}