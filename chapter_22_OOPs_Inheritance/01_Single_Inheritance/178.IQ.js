class BaseTest
{
    setup()
    {
        console.log("Base: Open Browser");
    }
}
class APITest extends BaseTest
{
    setup()
    {
        //console.log("APITest: open Browser");
    }
}
let test=new APITest();
test.setup();