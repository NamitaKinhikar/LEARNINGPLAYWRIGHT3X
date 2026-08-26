//Write a program to remove duplicate characters from a string.
//Input:Hello World
//Output:Helo Wrd

let strng="Hello world";
let str=strng.split("");// no need to add this

let str1="";
for(let i=0;i<str.length;i++)
{
    if(!str1.includes(str[i]))
    {
        str1=str1+str[i];
    }
}
console.log(str1);

/*
const data = require('fs').readFileSync(0, 'utf8');
const str = data.split('\n')[0];

// Write your solution here
let  st = "";
for (let i = 0; i < str.length; i++)
{
    if (!st.includes(str[i]))
    {
        st = st + str[i];
    }
}
console.log(st);
*/