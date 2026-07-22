# Compiler vs Interpreter

## Quick Comparison Table

| Feature | Compiler | Interpreter |
|---|---|---|
| **Translation timing** | Entire source code translated **before** execution | Source code translated **line-by-line** during execution |
| **Output** | Generates a separate machine-code file (`.exe`, `.out`) | No separate output file — executes directly |
| **Speed** | Faster execution (already translated) | Slower execution (translates while running) |
| **Errors** | All errors caught at compile time — won't run if any fail | Errors caught line-by-line — runs until it hits a faulty line |
| **Distribution** | Can ship the compiled binary (source not needed) | Source code must be present at runtime |
| **Examples** | C, C++, Rust, Go | Python, JavaScript (historically), Ruby, PHP |

---

## Code Example: Simple Addition

Let's use a tiny program and trace how each approach processes it.

```javascript
function add(a, b) {
    return a + b;
}

let result = add(5, 3);
console.log(result); // Expected: 8
```

---

### How the **Compiler** Processes It (e.g., C/C++)

The compiler passes through **3 main stages** before any execution happens.

```
┌───────────────────────────────────────────────────────────┐
│                      COMPILATION                          │
│                                                           │
│  Source Code                                              │
│  ┌──────────────────┐        ┌──────────────┐            │
│  │ function add(a,b) │───────▶│  Lexical     │            │
│  │ { return a+b; }   │ Stage1│  Analysis    │            │
│  │ let result = ...  │       │ (Tokenizing) │            │
│  └──────────────────┘        └──────┬───────┘            │
│                                      │                    │
│                         ┌────────────▼────────┐          │
│                         │  Syntax Analysis     │          │
│                         │ (AST — Abstract      │  Stage 2 │
│                         │  Syntax Tree)        │          │
│                         └────────────┬────────┘          │
│                                      │                    │
│                         ┌────────────▼────────┐          │
│                         │  Code Generation     │          │
│                         │  (Machine Code)      │  Stage 3 │
│                         └────────────┬────────┘          │
│                                      │                    │
│                         ┌────────────▼────────┐          │
│                         │   a.out / app.exe   │  OUTPUT  │
│                         └────────────┬────────┘          │
│                                      ▼                    │
│                               EXECUTION (runs fast)      │
└───────────────────────────────────────────────────────────┘
```

**Walkthrough for our code:**

1. **Lexical Analysis** — The compiler reads the entire source and breaks it into tokens: `function`, `add`, `(`, `a`, `,`, `b`, `)`, `{`, `return`, `a`, `+`, `b`, `;`, `}`, `let`, `result`, `=`, `add`, `(`, `5`, `,`, `3`, `)`, `;`, etc.

2. **Syntax Analysis (AST)** — Tokens are structured into a tree:
   - `FunctionDeclaration` → name: `add`, params: `[a, b]`, body: `BinaryExpression(+)`
   - `VariableDeclaration` → name: `result`, init: `CallExpression(add, [5, 3])`
   - `ExpressionStatement` → `CallExpression(console.log, [result])`

3. **Code Generation** — The AST is translated into **machine code** (binary instructions the CPU understands directly). A standalone executable is produced.

4. **Execution** — The OS runs the binary. No second translation — it's already in machine language, so it executes at full speed.

> **Key point:** Errors like `add(5, "hello")` would still produce an executable if the compiler only checks syntax. Type errors in statically-typed languages (C, Rust) are caught in stage 2/3.

---

### How the **Interpreter** Processes It (e.g., Python / Classic JavaScript)

The interpreter works **line-by-line** — no separate output file, no upfront full translation.

```
┌──────────────────────────────────────────────────────────┐
│                    INTERPRETATION                         │
│                                                           │
│  Source Code                                              │
│  ┌──────────────────┐                                    │
│  │ Line 1: function │──▶ Parse & Execute immediately     │
│  └──────────────────┘      ↳ defines function `add`      │
│                                                           │
│  ┌──────────────────┐                                    │
│  │ Line 4: let      │──▶ Parse & Execute immediately     │
│  └──────────────────┘      ↳ calls `add(5,3)`, stores    │
│                               `result = 8`                │
│                                                           │
│  ┌──────────────────┐                                    │
│  │ Line 5: console  │──▶ Parse & Execute immediately     │
│  └──────────────────┘      ↳ prints `8`                  │
│                                                           │
│  Result: 8  (printed to console)                         │
└──────────────────────────────────────────────────────────┘
```

**Walkthrough for our code:**

1. **Line 1** → Interpreter sees `function add(a, b) { return a + b; }`. It **parses** this line, creates a function object in memory, and stores it under the name `add`. Moves to next line.

2. **Line 4** → Interpreter sees `let result = add(5, 3)`. It **parses** this line, resolves `add` from memory (found!), executes the function body `a + b` → `5 + 3` → `8`, stores it in `result`.

3. **Line 5** → Interpreter sees `console.log(result)`. It **parses** this line, resolves `console.log`, resolves `result` (found, value is `8`), calls the function, and `8` appears in the terminal.

4. **If there were a Line 6 with an error** (e.g., `console.log(undefinedVar)`):
   - The interpreter would **crash at this line**
   - But lines 1–5 would have already executed successfully and printed `8`
   - This is the key difference: interpreters execute partially before hitting an error

> **Key point:** An interpreter doesn't know if line 5 has an error until it finishes executing line 4. It has **no global view** of the program.

---

## Hybrid: Just-In-Time (JIT) Compilation

Modern JavaScript engines (V8 in Chrome/Node.js) use a **hybrid** approach:

```
┌──────────────────────────────────────────────────────────┐
│                    JIT COMPILATION (V8 Engine)            │
│                                                           │
│  Source Code                                              │
│      │                                                    │
│      ▼                                                    │
│  Parser → AST → Interpreter (Ignition)   ←── fast start  │
│                         │                                 │
│                         ▼                                 │
│  Profiler monitors "hot" functions called many times      │
│                         │                                 │
│                         ▼                                 │
│  Compiler (TurboFan) compiles hot path to machine code    │
│                         │                                 │
│                         ▼                                 │
│  Optimized machine code replaces interpreted version      │
│                                                           │
│  Hybrid Benefit: Fast startup + Fast hot-path execution   │
└──────────────────────────────────────────────────────────┘
```

For our `add` function: If called 1000 times in a loop, V8's profiler notices it's "hot," TurboFan compiles it to native machine code, and subsequent calls run at compiled speed — **without** the user doing anything special.

---

## Summary

| Aspect | Compiler | Interpreter |
|---|---|---|
| **When translation happens** | Ahead of time (AOT) | On the fly (line-by-line) |
| **Can you distribute without source?** | Yes (binary) | No |
| **Error behavior** | Fails entirely before any execution | Runs until it hits the bad line |
| **Startup time** | Slower (must compile first) | Faster (starts immediately) |
| **Runtime performance** | Faster (native machine code) | Slower (repeated re-parsing) |
| **Dynamic features (eval, runtime types)** | Harder to support | Natural fit |
