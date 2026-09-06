function infiniteLoop():never
{
    while(true)
        {
            //never()-function will never return(throw/ infinite loop)
        }
}

function throwError(message:string):never
{
    throw new Error(message);
    
}