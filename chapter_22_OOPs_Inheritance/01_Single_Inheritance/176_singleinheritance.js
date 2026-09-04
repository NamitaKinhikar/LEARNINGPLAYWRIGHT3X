class BaseClass
{
    open()
    {
        console.log("Opening the page");
    }
    close()
    {
        console.log("closing the page");
    }
}
class LoginPage extends BaseClass
{
}
    let page= new LoginPage();
    page.open();
    page.close();