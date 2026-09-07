function getString(name: string): string 
{
    return "Amit";
 }

console.log(getString("pramod"));
//getString(123);//not allowed only string bcos datatype mentioned here string dts y
//upper-but this is not a generic function

//this is the generic function
function getFirstResult<T>(result:T[]):T
{
    return result[0]!; // ! = non null assertion operator
}

let firstNumber = getFirstResult<number>([200, 400, 500]);
let firstString= getFirstResult<string>(["Login", "Signup", "Cart"]);
let firstBoolean = getFirstResult<boolean>([true, false, true]);

console.log("First code:", firstNumber);
console.log("First test:", firstString);
console.log("First test:", firstBoolean);

//t is placeholder, it can be anything