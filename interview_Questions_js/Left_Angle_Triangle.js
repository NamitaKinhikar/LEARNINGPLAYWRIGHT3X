/*const data = require('fs').readFileSync(0, 'utf8'); //take input from User
const n = parseInt(data.trim(), 10);
const num = n;
for (let i = n; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}*/

const num = 4;
for (let i = num; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}