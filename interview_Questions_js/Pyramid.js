//Print a pyramid pattern using stars. 
// For input n, print n rows where row i has (n-i) leading spaces and (2*i-1) stars.
const num=4;
for(let i=1;i<=num;i++)
{
    let row="";
    for(let k=1;k<=num-i;k++)
    {
       row+=" ";
    }
    for(let j=1;j<=(2*i-1);j++)
    {
        row+="*";
    }
    console.log(row);
}