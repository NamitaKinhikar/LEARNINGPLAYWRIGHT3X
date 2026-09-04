class BaseTest
{
    constructor()
    {
     console.log("Parent constructor");
    }
setup()
{
    console.log("Base: Open Browser");
}
teardown()
{
    console.log("Base: Close Browser");
}
}
class UITest extends BaseTest
{
    constructor()
    {
        super();
    }
setup()
{
super.setup();//UI test will help u to call parent functions
console.log("UI:Maximized window");

}
teardown()
{
console.log("UI: take screenshot")
super.teardown();
}
}

let obj=new UITest();
obj.setup();
obj.teardown(); 