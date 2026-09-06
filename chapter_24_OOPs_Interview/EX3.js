class User
{
    constructor(name)
    {
        this.name= name;
    }
    greet()
    {
        console.log("Hi, I am "+this.name);
    }
}
let u1= new User("Alice");
let u2= new User("Bob");

u1.greet();  //Hi, I am Alice
u2.greet();  //Hi, I am Bob
