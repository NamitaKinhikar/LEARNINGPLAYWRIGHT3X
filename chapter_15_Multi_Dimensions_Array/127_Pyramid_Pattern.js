//   *
//  ***
// ***** 

let n = 3;
for(let i=1;i<=n;i++)
{
    let row = "";
    for(let j=1;j<=n-i;j++)
    {
        row += " ";
    }
    for(let j=1;j<=2*i-1;j++)  //1,3,7,9
    {
      row = row + "*";
    }
    console.log(row);
}
//console.log("-----------------------------");
let m=2;
for(let i=2;i>=0;i--)
{
    for(let k=0;k<m-i;k++)
    {
        process.stdout.write(" ");
    }
    for(let j=0;j<(2*i-1);j++)
    {    
       process.stdout.write("*")
    }
    console.log("");
}