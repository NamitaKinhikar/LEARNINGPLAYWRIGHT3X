class TestCase 
{
    #status = "not run";
    static #count = 0;

    constructor(name) 
    {
        this.name = name;
        TestCase.#count++;
    }
    run(pass) 
    {
       this.#status = pass ? "PASSED" : "FAILED";
    }
    getStatus() { return this.#status; }

    static getCount() 
    { 
        return TestCase.#count; 
    }
    static setCount(v) 
    {
        TestCase.#count = v;
    }
}

const tc = new TestCase("login");
tc.run(true);
console.log(tc.getStatus());//non static DM can be acessed by object of a class only.
new TestCase("login");
new TestCase("login");
new TestCase("login");
console.log(TestCase.getCount());//static DM can be accessible by classname only.


//-----------for my understanding-------------------
class person
{
    #age;
    #name;
    constructor(name, age)
    {
        this.#name=name;
        this.#age=age;
    }
    getname()
    {
        return this.#name;
    }
    getage()
    {
        return this.#age;
    }
    setname(name, age)
    {
        if(age>0)
        {
            this.#name=name;
            this.#age=age;
        }
        else
        {
            console.log("Age should be greater than 0");
        }
    }
}
//access private DM & create object of a class, outside of a class 
    let obj=new person("namita",29);
    console.log ("Before setting:- ",obj.getname()," ------  ",obj.getage());

   obj.setname("Mitansh",3);
   console.log("After setting new Name:-",obj.getname()," ----- ",obj.getage());
