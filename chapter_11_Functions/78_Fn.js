//without function repeated logic
let score=85;
let result=score>=70? "Pass":"Fail";
console.log(result);

let score1=45;
let result1=score1>=70? "Pass":"Fail";
console.log(result1);

//Define
function getResult(score)
{
    return score>=70? "Pass":"Fail";
}

getResult(85);//calling Function-No Output
getResult(45);//calling Function