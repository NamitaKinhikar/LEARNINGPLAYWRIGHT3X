console.log(5 == "5");    // true  (loose equality - compares value only)
console.log(5 === "5");   // false (strict equality - compares value + type)
console.log(5 != "5");    // false
console.log(5 !== "5");   // true
console.log(5 > 3);       // true
console.log(5 < 3);       // false
console.log(5 >= 5);      // true
console.log(5 <= 4);      // false
/**The Core Difference
=== **(strict equality)** — checks **both value AND datatype**. No conversion.

== **(loose equality)** — checks **value only**,after converting both sides to the 
same type. (type coercion)
*/
