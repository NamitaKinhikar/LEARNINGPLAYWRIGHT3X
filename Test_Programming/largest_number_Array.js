let arr=[11,23,89,70,123,15,40];
console.log("Original Array is= ", arr);
let largestNo=arr[0];
for(let i=0;i<=arr.length-1;i++)
{
    if(arr[i]>largestNo)
    {
        largestNo=arr[i];
    }
}
console.log("largest number in the given array is= ",largestNo);