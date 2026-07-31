let arr=[1,2,3];
console.log(arr);  //[ 1, 2, 3 ]

//Add to last
arr.push(4);
console.log(arr);  //[ 1, 2, 3, 4 ]

//Remove from last
arr.pop(); //Automatically last element remove
console.log(arr); //[ 1, 2, 3 ]

arr.push(5,6);
console.log(arr); //[ 1, 2, 3, 5, 6 ]

//Add to 1st(BEGINNING)
arr.unshift(0);
console.log(arr);// [ 0, 1, 2, 3, 5, 6 ]

//Remove From BEGINNING
arr.shift();
console.log(arr); //[ 1, 2, 3, 5, 6 ]

//[ 1, 2, 3, 5, 6 ]

arr.splice(2, 1, );    // number,  delete count,  
console.log(arr);   //[1, 2, 5, 6]

arr.splice(2, 0 , 99);  //(startIndex, deleteCount, itemToInsert)
console.log(arr);  //[ 1, 2, 99, 5, 6 ]

arr.splice(1, 2, 10, 20);
console.log(arr);  //[ 1, 10, 20, 5, 6 ]
//Sratfrm 1st position --remove 2 element--add(10,20) 

/*arr.splice(2, 1, 99);  //(startIndex, deleteCount, itemToInsert)
console.log(arr);  //[ 1, 10, 99, 5, 6 ]*/

arr.splice(-1, 1, 1);
console.log(arr); // [ 1, 10, 20, 5, 1 ]
