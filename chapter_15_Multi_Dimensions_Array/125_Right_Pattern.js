// n = 3
// *
// * *
// * * *

const process = require("process");

let m = 3;
// for (let i = 1; i <= n; i++) {
//     for(let j=1;j<=i;j++){
//         process.stdout.write("*");
//     }
//     console.log("");  
// }
for (let i=0; i < m; i++) 
{
    for(let j=0;j<=i;j++)
    {
        process.stdout.write("*");
    }
    console.log("");  
}
//------------------------------------
let n=3;
for (let i=0; i <=n; i++) 
    {
        for(let k=0;k<n-i;k++)
        {
            process.stdout.write(" ");
        }
    for(let j=0;j<=i;j++)
        {
        process.stdout.write(" *");
    }
    console.log("");  
}