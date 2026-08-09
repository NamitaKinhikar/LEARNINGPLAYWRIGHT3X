const str = "Hello World".toLowerCase();
let vcount = 0;
let cCount = 0;
for (let i = 0; i < str.length; i++) 
{
    if (str.charAt(i) >= 'a' && str.charAt(i) <= 'z') {
        if (
            str.charAt(i) === 'a' ||
            str.charAt(i) === 'e' ||
            str.charAt(i) === 'i' ||
            str.charAt(i) === 'o' ||
            str.charAt(i) === 'u'
        ) {
            vcount++;
        } else {
            cCount++;
        }
    }
}
console.log("Vowels: " + vcount);
console.log("Consonants: " + cCount);

/*
const data = require('fs').readFileSync(0, 'utf8');
const str = data.split('\n')[0].toLowerCase();

// Write your solution here
let vcount = 0;
let cCount = 0;

for (let i = 0; i <= str.length - 1; i++) {
    if (str.charAt(i) >= 'a' && str.charAt(i) <= 'z') {
        if (
            str.charAt(i) === 'a' ||
            str.charAt(i) === 'e' ||
            str.charAt(i) === 'i' ||
            str.charAt(i) === 'o' ||
            str.charAt(i) === 'u'
        ) {
            vcount++;
        } else {
            cCount++;
        }
    }
}
console.log("Vowels: " + vcount);
console.log("Consonants: " + cCount);
*/