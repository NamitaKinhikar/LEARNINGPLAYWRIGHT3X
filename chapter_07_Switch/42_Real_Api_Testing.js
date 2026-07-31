let responseCode=404;

switch(responseCode)
{
    case 200:
        console.log("200- OK");
        break;
    case 404:
        console.log("404-Requested Resources is not Found !");
        break;
    default:
        console.log("Not Status Code Match");        
}