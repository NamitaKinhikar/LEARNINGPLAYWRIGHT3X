let arr=[11,34,78,23,34,90,11,90,50];
console.log("original Array is = "+ arr);

let emptyarr=[];

for(let i=0; i<arr.length; i++)
{
    if(!emptyarr.includes(arr[i]))
    {
        emptyarr.push(arr[i]);
    }
}
//console.log("After removing duplicate element from Array ", emptyarr);
if(emptyarr.length===0)
{
    console.log("No duplicate elements are found" , arr);
}
else
{
    console.log("After removing duplicate element from Array ", emptyarr);
}
