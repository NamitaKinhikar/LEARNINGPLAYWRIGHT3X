# Keywords in JavaScript

## What is a Keyword?

A **keyword** is a reserved word in the JavaScript language that has a predefined meaning and purpose. Keywords are part of the language syntax — you **cannot** use them as variable names, function names, or identifiers.

Think of keywords as the **command vocabulary** of the language. Just like English has reserved words like "if", "while", and "for" that have specific grammatical roles, JavaScript has reserved words that tell the engine what to do.

---

## JavaScript Keywords (Complete List)

Grouped by purpose for clarity:

### 1. Variable & Constant Declaration

| Keyword | Purpose | Example |
|---|---|---|
| `var` | Declares a function-scoped or globally-scoped variable | `var x = 10;` |
| `let` | Declares a block-scoped local variable | `let y = 20;` |
| `const` | Declares a block-scoped constant (cannot be reassigned) | `const z = 30;` |

### 2. Control Flow

| Keyword | Purpose | Example |
|---|---|---|
| `if` | Executes a block if condition is true | `if (x > 5) { }` |
| `else` | Executes a block if condition is false | `else { }` |
| `else if` | Specifies a new condition if previous was false | `else if (x > 3) { }` |
| `switch` | Selects a block based on expression value | `switch (val) { }` |
| `case` | A specific value branch inside a switch | `case 1:` |
| `default` | The fallback branch inside a switch | `default:` |
| `break` | Exits a loop or switch statement | `break;` |
| `continue` | Skips to the next iteration of a loop | `continue;` |

### 3. Loop Iteration

| Keyword | Purpose | Example |
|---|---|---|
| `for` | Loops with initialization, condition, and increment | `for (let i=0; i<5; i++)` |
| `while` | Loops while a condition is true | `while (x < 10) { }` |
| `do` | Executes once, then loops while condition is true | `do { } while (x);` |
| `in` | Iterates over enumerable property names (used with `for`) | `for (let key in obj)` |
| `of` | Iterates over iterable values (used with `for`) | `for (let val of arr)` |

### 4. Function & Object

| Keyword | Purpose | Example |
|---|---|---|
| `function` | Declares a function | `function add(a,b) { }` |
| `return` | Exits a function and returns a value | `return a + b;` |
| `class` | Declares a class | `class Person { }` |
| `extends` | Creates a class that inherits from another | `class Student extends Person` |
| `super` | References the parent class constructor or methods | `super(name);` |
| `new` | Creates an instance of a user-defined object type | `new Person("Alice");` |
| `this` | Refers to the current execution context | `this.name` |
| `constructor` | Special method inside a class for initializing objects | `constructor(name) { }` |
| `static` | Defines a static method or property (called on class, not instance) | `static count() { }` |
| `get` | Binds an object property to a getter function | `get fullName() { }` |
| `set` | Binds an object property to a setter function | `set fullName(val) { }` |

### 5. Error Handling

| Keyword | Purpose | Example |
|---|---|---|
| `try` | Wraps code that may throw an error | `try { riskyCode(); }` |
| `catch` | Handles errors thrown in the try block | `catch (err) { }` |
| `finally` | Executes after try/catch regardless of outcome | `finally { cleanup(); }` |
| `throw` | Throws a user-defined exception | `throw new Error("Oops");` |

### 6. Boolean & Null

| Keyword | Purpose | Example |
|---|---|---|
| `true` | Boolean value — true | `let flag = true;` |
| `false` | Boolean value — false | `let flag = false;` |
| `null` | Represents the intentional absence of any object value | `let x = null;` |
| `undefined` | Indicates a variable has been declared but not assigned | `let x; // undefined` |

### 7. Module System

| Keyword | Purpose | Example |
|---|---|---|
| `import` | Imports bindings from another module | `import { add } from './math';` |
| `export` | Exports bindings from a module | `export function add() { }` |
| `from` | Specifies the module path in an import statement | `import x from './mod';` |
| `as` | Renames imports or exports | `import { add as sum }` |
| `default` | Exports a single default binding from a module | `export default class { }` |

### 8. Async Programming

| Keyword | Purpose | Example |
|---|---|---|
| `async` | Declares an asynchronous function (returns a Promise) | `async function fetchData() { }` |
| `await` | Pauses execution until a Promise settles (inside async) | `let data = await fetch(url);` |
| `yield` | Pauses and resumes a generator function | `function* gen() { yield 1; }` |
| `yield*` | Delegates to another generator or iterable | `yield* otherGen();` |

### 9. Context & Debugging

| Keyword | Purpose | Example |
|---|---|---|
| `debugger` | Invokes available debugging functionality (breakpoint) | `debugger;` |
| `void` | Evaluates an expression and returns `undefined` | `<a href="javascript:void(0)">` |

### 10. Type & Object Checking

| Keyword | Purpose | Example |
|---|---|---|
| `typeof` | Returns a string describing the type of an operand | `typeof 42 → "number"` |
| `instanceof` | Checks if an object is an instance of a constructor | `obj instanceof Array` |
| `delete` | Removes a property from an object | `delete obj.prop;` |

### 11. Legacy / Rarely Used

| Keyword | Purpose | Example |
|---|---|---|
| `with` | Extends the scope chain for a statement (strict-mode forbidden) | `with (obj) { x }` |
| `var` (historical) | Pre-ES6 variable declaration (function-scoped) | See Variable section above |

---

## Reserved Words You Cannot Use as Identifiers

The following words are reserved by JavaScript and will throw an error if used as variable names:

```
await, break, case, catch, class, const, continue, debugger,
default, delete, do, else, enum, export, extends, false, finally,
for, function, if, import, in, instanceof, let, new, null, of,
return, static, super, switch, this, throw, true, try, typeof,
var, void, while, with, yield
```

Plus these reserved for future use (in strict mode):
```
implements, interface, let, package, private, protected, public, static, yield
```

---

## Code Walkthrough: Keywords in Action

```javascript
// const and let — Variable declaration keywords
const PI = 3.14;
let radius = 5;

// function and return — Function keywords
function calculateArea(r) {
    return PI * r * r;
}

// if, else, typeof — Control flow and type checking
let area = calculateArea(radius);

if (typeof area === "number") {
    console.log("Area: " + area);
} else {
    console.log("Invalid area");
}

// try, catch, throw — Error handling keywords
try {
    if (radius < 0) {
        throw new Error("Radius cannot be negative");
    }
} catch (error) {
    console.log(error.message);
}

// for, of, let — Iteration keywords
let numbers = [1, 2, 3];
for (let num of numbers) {
    console.log(num);
}

// class, constructor, extends, super, new — OOP keywords
class Shape {
    constructor(name) {
        this.name = name;
    }
}

class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }
}

let myCircle = new Circle("MyCircle", 10);

// async, await — Async keywords
async function fetchData() {
    let data = await fetch("https://api.example.com");
    return data;
}
```

**Keywords used in the above example:**
```
const, let, function, return, if, typeof, else, console,
try, catch, throw, new, for, of, class, constructor,
extends, super, async, await
```

(`console` is not a keyword — it's a global object. `log` is a method name, not a keyword.)

---

## Keyword vs Identifier: Quick Rule

| | Keyword | Identifier |
|---|---|---|
| **Is it reserved?** | Yes — cannot be used as variable/function name | No — freely creatable by the developer |
| **Who defines it?** | The language specification (ECMAScript) | The developer |
| **Examples** | `if`, `for`, `let`, `return`, `class` | `myVar`, `calculateArea`, `userName` |

> If you try `let if = 5;` or `const return = "hello";`, JavaScript throws a `SyntaxError` — those words are reserved for the language's own use.
