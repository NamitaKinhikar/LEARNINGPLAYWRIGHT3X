/*
# do while loop-retrying a flaky action at least once
 will always execute at least one time

> For , 
>  For of, For in, ForEach ->  They will come when we use the Array!
> For loop, with the For loop- Matrix

*/
let retry=0;
do
{
    console.log("Execute a code!");
    console.log("ReTRying......",retry);
    retry++;
}
while(retry<3);