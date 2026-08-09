function validateStatusCode(status) 
{
    if (status >= 200 && status <= 300) 
    {
        console.log("Request is fine!")
    }
}

const validateStatusCode_Exp = function (status)
{
    if (status >= 200 && status <= 300) 
    {
        console.log("Request is fine!")
    }
}

const validateStatusCode_Arrow = (status) => 
    {
    if (status >= 200 && status <= 300) 
    {
        console.log("Request is fine!");
    }
}
/*function validateStatusCode_One(statusCode)
{
    if(statusCode>=400 && statusCode <=500)
    {
        console.log("Requested resources is not found");
    }
}*/

//validateStatusCode_One(404);
validateStatusCode(200);
validateStatusCode_Exp(200);
validateStatusCode_Arrow(200);