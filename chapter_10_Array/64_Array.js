/*Array & Functions
- Arrays are ordered collections of values. 
- JavaScript arrays are dynamic and can hold mixed types.
- An ordered, zero-indexed, **mutable** collection.
-  `typeof []`  is `"object"`  -> use `Array.isArray()`  to check.
```
const browsers = ["chrome", "firefox", "webkit"];
console.log(browsers[0]);          // chrome
console.log(browsers.at(-1));      // webkit  (negative index)
console.log(browsers.length);      // 3
*/
let fruit=[];
let browser=["Chrome", "Firefox", "Webkit"];//-3, -2, -1

console.log(browser[0]);       //chrome
console.log(browser.at(-1));   //Undefined -for negative index used at()
console.log(browser.length);   //3
console.log(fruit.length);     //0
console.log(browser[-1]);
