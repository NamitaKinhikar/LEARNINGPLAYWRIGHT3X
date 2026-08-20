let num =13;
let count=0;
for(let i=2;i<num;i++)
{
    if(num%i==0)
    {
      count++;
      break;
    }
}
if(count==0)
{
    console.log("given number is prime number= ", num);
}
else
{
    console.log("not Prime number=", num);
}