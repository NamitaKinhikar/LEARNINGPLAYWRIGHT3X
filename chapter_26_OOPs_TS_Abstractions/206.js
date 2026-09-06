class Car 
{
    // Parameterized Constructor
    constructor(assigned_name) 
    {
        this.name = assigned_name;
    }

    eat()
    {
        console.log("Normal: Eating")
    }
}

let hyundai_i10 = new Car("i10");//constructor calling
console.log(hyundai_i10.name);
hyundai_i10.eat();  //normal method calling using instance

let hyundai_creta = new Car("creta"); //constructor calling
console.log(hyundai_creta.name);