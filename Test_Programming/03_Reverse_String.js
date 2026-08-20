let str= "javaProgramming";
let rev="";
for(let i=str.length-1; i>=0; i--)
{
    rev=rev+str.charAt(i);
}
console.log("Original String is= ",str);
console.log("Reverse the String= ",rev);