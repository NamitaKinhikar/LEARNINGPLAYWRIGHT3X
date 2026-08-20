let a=10;
let b=550;
let c=50;
if(a>=b && a>=c)
{
    if(a===b && a===c)
    {
        console.log("a,b,c all Are equal");
    }
    else if(a===b)
    {
        console.log("a & b are equals");
    }
    else if(a==c)
    {
        console.log("a & c are equal ");
    }
    else
    {
        console.log("a is greater");
    }
}
else if(b>=c)
{
    if(b===c)
    {
        console.log("b & c are equal");
    }
    else{
        console.log("b is greater");
    }
}
else{
    console.log("c is greater");
}