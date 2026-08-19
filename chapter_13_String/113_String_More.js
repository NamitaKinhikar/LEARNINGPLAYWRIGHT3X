let str = "  Hello, World!  ";
console.log(str.toUpperCase()); // HELLO, WORLD!  
console.log(str.toLowerCase());  //hello, world!

// Trim whitespace
console.log(str.trim()); // it will remove space both sides (left--right)

str.trimStart();  // it will remove space from starting side
str.trimEnd();  // it will remove space from ending side

// Replace
let msg = "Test: FAIL. Retry: FAIL.";
msg.replace("FAIL", "PASS"); // // "Test: PASS. Retry: FAIL."  (first only)
msg.replaceAll("FAIL", "PASS");
msg.replace(/FAIL/g, "PASS"); // replace all with Regex


// Concatenation

"Hello" + " " + "World";
"Hello".concat(" ", "World");
`${"Hello"} ${"World"}`;