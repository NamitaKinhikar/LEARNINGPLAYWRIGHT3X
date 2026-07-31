let tests=["Login", "Checkout", "Search"];

for(let i=0; i<tests.length;i++)
{
    console.log(tests[i]);
}
console.log("---------------------");

for(let test of tests)
{
    console.log(test);// value
}
console.log("---------------------");

tests.forEach((test, index)=> {
 console.log(`${Index}: ${test}`);    
});

console.log("---------------------");
//entries()---index + value
for(let[i, test] of tests.entries())
{
    console.log(i,test)
}
console.log("---------------------");

let students=["Mitansh", "Namita", "Harshal", "Rutuja", "Anu"];
for(let student in students)
{
    console.log(student, "->", students[student]);
}