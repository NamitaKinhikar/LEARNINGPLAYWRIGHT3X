class Animal
{
 constructor(name)
 {
    this.name=name;
 }
 eat()
 {
    console.log(this.name+ " is eating");
 }
 sleep()
 {
    console.log(this.name+ " is sleeping");;
 }
 foo()
 {
   console.log(" Foo Called!...")
 }
}
class Dog extends Animal
{
    constructor(name, breed)
    {
        super(name);
        this.breed=breed;
    }
    bark()
    {
        super.foo();
        console.log(this.name+ " is barking");
    }
}
let d1= new Dog("REX","Labrador");
d1.eat();
d1.sleep();
d1.bark();
//console.log(d1.breed);