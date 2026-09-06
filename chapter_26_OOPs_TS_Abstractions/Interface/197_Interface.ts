/*# Interfaces
- An interface defines the SHAPE of an object.
- what properties it must have and what types those **properties must be.** 
- It's like a contract. If an object says "I follow this interface,
" it MUST have all the required properties. 

Abstraction works at the (higher) bigger class level(hiding the details)
incapsulation works within the class(hiding the details)*/
// Abstraction 
// Interface
// ENUms
// Abstract class

interface User {
  name: string;
  age: number;
  email: string;
}


const user1: User = {
    name: "John",
    age :  30,
    email: "abc@gmail.com"
}

const user2: User = {
    name: "John2",
    age : 56,
    email: "abc@gmail.com"
}

const user3: User = {
    name: "John3",
    age : 23,
    email: "abc@gmail.com"
}
