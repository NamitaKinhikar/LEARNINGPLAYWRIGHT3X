//Searching
let result=["pass", "fail", "pass", "error", "fail"];

//IndexOf-Return 1st index -or -1 if not found
result.indexOf("fail");//1
console.log(result.indexOf("skip")); // -1 

//lastIndexOf-searches from the end
console.log(result.lastIndexOf("fail")); //4

//include-return boolean
console.log(result.includes("error"));//isPresent or not --true