let status=0;
console.log(typeof status);

switch(status)
{
    case false:
        console.log("False -  match");
        break;
    case 0:
        console.log("0 - Matched");  //Only performed Strict Comparision
        break;
    
             
}
/*
## Concepts covered
- `**switch (expr)**`  — evaluates `expr`  once, then matches against each `case` .
- `**case**`  **matching** — comparison is **strict (**`**===**` **)**, no type coercion.
- `**break**`  — exits the switch. Without it, execution **falls through** to the next case.
- `**default**`  — runs when no `case`  matches. Position doesn't matter, but conventionally last.
- **Grouped cases** — stacking `case`  labels with no body in between shares one block of code.
- `**switch (true)**`  — idiom for range/boolean checks (each `case`  becomes a condition).
- **Duplicate** `**case**`  **values** — legal syntactically; the **first** match wins, the rest are dead code.
- **Block scoping in cases** — `let`  / `const`  inside a `case`  need braces `{ }`  if reused across cases.

*/