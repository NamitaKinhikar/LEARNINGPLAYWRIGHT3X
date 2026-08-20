let orgStrg="naman";
let rev="";
console.log("Original String is= ",orgStrg);

for(let i=orgStrg.length-1; i>=0; i--)
{
    rev=rev+orgStrg.charAt(i);
}
if(orgStrg===rev)
{
    console.log("Given String is palindrome String=",orgStrg);
}
else
{
console.log("Not Palindrome="+rev)
}