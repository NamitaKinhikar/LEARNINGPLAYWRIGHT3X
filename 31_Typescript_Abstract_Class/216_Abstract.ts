abstract class BaseTest
{
    protected testName: string;
    constructor(testName: string) 
    {
        this.testName = testName;
    }
//only declaration , no implementation-- abstract method()
    abstract setup(): void;
    abstract execute(): void;
    abstract teardown(): void;
    abstract loan(): void;
    
    loan1(): void //ormal method having body {--------}
    {
        console.log(" ---Hi---");
    }
}

class UITest extends BaseTest 
{
    setup(): void 
    {
        console.log("  Setup: launch browser");
    }
    execute(): void 
    {
        console.log("  Execute: click buttons, fill forms");
    }
    teardown(): void 
    {
        console.log("  Teardown: close browser");
    }
    loan(): void 
    {
        console.log("  GIVE LOAN");
    }
}
let runAbs= new UITest("Abstract test");
runAbs.setup();
runAbs.execute();
runAbs.teardown();
runAbs.loan();
runAbs.loan1();