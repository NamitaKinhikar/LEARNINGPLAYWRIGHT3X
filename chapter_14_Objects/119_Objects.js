const user = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

console.log(user);

// Accessing properties
console.log(user.name);
console.log(user["age"]);

// Adding/modifying properties
user.city = "NYC";   // add element to object
user.age = 31;  //it will update user ageto 31

console.log(user);