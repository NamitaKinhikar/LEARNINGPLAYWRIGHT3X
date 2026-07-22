//multiple conditions in ternary operator
let age= 27;
//age>18-> he will go to goa, else is not
//drink> 25 yes, else no
let is_Pramod_enjoy= age> 18 ? (age > 26 ? "Drink": "Not Drink"): false;
console.log(`can pramod Drink? : ${is_Pramod_enjoy}`);
