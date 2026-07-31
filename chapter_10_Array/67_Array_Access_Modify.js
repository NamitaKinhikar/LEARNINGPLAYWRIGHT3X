// Accessing & Modifying
let Statuses=["Pass", "Fail", "Skip"];
console.log(Statuses[0]);  //Pass
console.log(Statuses[2]);  //Skip

console.log(Statuses.at(-1)); //Skip
console.log(Statuses.at(-2));  //Fail
console.log(Statuses.at(-4));  //Undefined

//ModiFy
Statuses[1]="Blocked";
console.log(Statuses);  //[ 'Pass', 'Blocked', 'Skip' ]