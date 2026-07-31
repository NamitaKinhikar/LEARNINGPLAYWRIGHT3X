let browser=['Chrome','FireFox','Safari','Opera','Edge'];
console.log(browser.length);//3

browser.pop(); 
//console.log(browser); //["Chrome", "FireFox"]

let remove=browser.shift();
//console.log(browser); //["Chrome", "FireFox"]
//console.log(remove);//["FireFox"] 

for(let i=0; i<browser.length; i++)
{
    console.log(browser[i]);
    if(browser[i]==="Opera")
    {
        console.log("Opera Doesnt support Automation Now!");
    }
}