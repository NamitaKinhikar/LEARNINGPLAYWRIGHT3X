let testScore=85;

switch(true)
{
    case (testScore>=95):
        console.log("Outstanding - Top Performer");
        break;
    case (testScore>=85):
        console.log("Excellent - Above Expectations");
        break;
    case (testScore>=70):
        console.log("Good - Meets Expectation");
        break;
    case (testScore>=50):
        console.log("Need improvement");
        break;
    default:  
        console.log("Unsatisfactory - require training");
        break;          
}