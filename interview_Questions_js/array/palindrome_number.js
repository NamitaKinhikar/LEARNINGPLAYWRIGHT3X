/*Write a program to check if a given string is a palindrome 
(reads the same forwards and backwards).
*/
let orgNum=1235321
let num=orgNum;
let rev=0;
let rem;
while(num!=0)
{
 rem=num%10;
 rev=rev*10+rem;
 num=Math.floor(num/10);
}
if(orgNum===rev)
{
    console.log("YES");
}
else{
    console.log("NO");
}