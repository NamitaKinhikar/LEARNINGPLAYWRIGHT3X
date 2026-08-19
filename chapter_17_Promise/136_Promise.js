let order = new Promise(function(resolve, reject)
{
    let foodready = false;
        if(foodready)
        {
            resolve("Pizza is delivered!");
        }
        else{
            reject("Order cancelled");
        }
});
console.log(order);

//-----------------------------------------------------------
let ord=new Promise(function(item1,item2)
{
    let go=true;//boolean value
    if(go) //means if condition -true
    {
        item1("Done");
    }
    else{
        item2(" not done");
    }
});
console.log(ord); //for this output need this line -Promise { 'Done' }