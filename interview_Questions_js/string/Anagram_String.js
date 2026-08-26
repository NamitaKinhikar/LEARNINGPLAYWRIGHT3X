//Anagram => means two strings that contain the same characters with the same frequency, 
// but possibly in a different order.
let one="Listen";
let two="Silent";
let s1=one.toLowerCase().split("").sort().join("");
let s2=two.toLowerCase().split("").sort().join("");

if(s1===s2)
{
    console.log("given string is analog");
}
else{
    console.log("NOT");
}

/*
const data = require('fs').readFileSync(0, 'utf8');
const lines = data.split('\n');
const s1 = (lines[0] || '');
const s2 = (lines[1] || '');

let  a = s1.split("").sort().join("");
let  b = s2.split("").sort().join("");
if (a === b) {
    console.log("YES");
}
else {
    console.log("NO");
}
*/