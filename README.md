# JavaScript & TypeScript — Learn by Doing (PlayWrite_3x)

A hands-on, code-first learning workspace for **JavaScript** and **TypeScript**, built as numbered chapter exercises that flow from the absolute basics all the way to OOP, asynchronous programming, and TypeScript.

Each chapter folder contains short, self-contained `.js` / `.ts` files (and a few `.md` concept notes). File numbers run continuously across chapters, so the repo doubles as a guided, roughly sequential curriculum.

## How to Use

1. Open any chapter folder from the table below.
2. Run a file directly with Node: `node <file>.js` (or `node <file>.ts` via a TS runner).
3. Many files are interview-style questions — try solving them yourself before peeking at the code.
4. `IQ_Notes` has standalone concept explainers written in Markdown.

## Repository Map

### JavaScript Foundations

| Chapter | Folder | Covers |
| --- | --- | --- |
| 01 | [`chapter_01Basics`](./chapter_01Basics) | First JS program & basics |
| 02 | [`chapter_02_JavaScriptConcept`](./chapter_02_JavaScriptConcept) / [`chapter_02JSConcept`](./chapter_02JSConcept) | Core JS concepts (`let`, variables) |
| 03 | [`chapter_03_Identifier`](./chapter_03_Identifier) | Identifier rules & comments |
| 04 | [`chapter_04_Literal`](./chapter_04_Literal) | Literals, `null` vs `undefined`, numbers |
| 05 | [`chapter_05_Operator`](./chapter_05_Operator) | Operators, data types, ternary, `??` |
| 06 | [`chapter_06_Statement`](./chapter_06_Statement) | Multiple conditions & statements |
| 07 | [`chapter_07_Switch`](./chapter_07_Switch) | `switch`, grouped cases |
| 08 | [`chapter_08_userInput`](./chapter_08_userInput) | User input (Node, prompt) |
| 09 | [`chapter_09_Loops`](./chapter_09_Loops) | `for`, `while`, `do...while`, nested loops |
| 10 | [`chapter_10_Array`](./chapter_10_Array) | Arrays, iteration, transforms, destructuring |

### Functions & Core Concepts

| Chapter | Folder | Covers |
| --- | --- | --- |
| 11 | [`chapter_11_Functions`](./chapter_11_Functions) | Function types, hoisting, TDZ, spread |
| 12 | [`chapter_12_Fn_Closure`](./chapter_12_Fn_Closure) | Scope & closures |
| 13 | [`chapter_13_String`](./chapter_13_String) | Strings, searching, extraction |
| 14 | [`chapter_14_Objects`](./chapter_14_Objects) | Objects & call-by-reference/value |
| 15 | [`chapter_15_Multi_Dimensions_Array`](./chapter_15_Multi_Dimensions_Array) | 2D arrays & pattern printing |
| 16 | [`chapter_16_Callback`](./chapter_16_Callback) | Sync/async callbacks, callback hell |
| 17 | [`chapter_17_Promise`](./chapter_17_Promise) | Promises, `Promise.all`, real API usage |
| 18 | [`chapter_18_Async_Await`](./chapter_18_Async_Await) | `async`/`await`, sequential & parallel runs |
| 19 | [`chapter_19_Export_Import`](./chapter_19_Export_Import) | ES modules, export/import |

### Object-Oriented Programming (OOP)

| Chapter | Folder | Covers |
| --- | --- | --- |
| 20 | [`chapter_20_Class_Object_OOPs`](./chapter_20_Class_Object_OOPs) | Classes, objects, public/private, static |
| 21 | [`chapter_21_OOPs_Ecapsulation`](./chapter_21_OOPs_Ecapsulation) | Encapsulation |
| 22 | [`chapter_22_OOPs_Inheritance`](./chapter_22_OOPs_Inheritance) | Single, multiple, multi-level, hierarchical inheritance |
| 23 | [`chapter_23_OOPs_Polymorphism`](./chapter_23_OOPs_Polymorphism) | Polymorphism |
| 24 | [`chapter_24_OOPs_Interview`](./chapter_24_OOPs_Interview) | OOP interview questions |

### TypeScript

| Chapter | Folder | Covers |
| --- | --- | --- |
| 25 | [`chapter_25_Typescript`](./chapter_25_Typescript) | TypeScript exercises (`tsconfig.json` at root) |

### Practice & Notes

| Folder | Contents |
| --- | --- |
| [`Test_Programming`](./Test_Programming) | Classic programming problems (palindrome, factorial, Fibonacci, prime, vowels, arrays...) |
| [`interview_Questions_js`](./interview_Questions_js) | JS interview questions & pattern programs |
| [`MCQ`](./MCQ) | Multiple-choice questions (Markdown) |
| [`IQ_Notes`](./IQ_Notes) | Concept explainers: identifier rules, compiler vs interpreter, stack vs heap, source code → bytecode → binary |
| [`session_1`](./session_1) / [`session_2`](./session_2) / [`session_3`](./session_3) | Practice sessions (Armstrong number, theory, LLM practice) |

## Project Notes

- Root-level [`tsconfig.json`](./tsconfig.json) configures the TypeScript exercises (strict mode, ESNext, NodeNext modules).
- A few `.md` files live inside chapter folders (e.g. hoisting/TDZ, string cheatsheet).
- Concept notes follow the visual style seen in `IQ_Notes` — tables, walkthrough examples, diagrams, and a TL;DR.

Happy learning!
