# Stack vs Heap Memory

## Quick Comparison Table

| Feature | Stack | Heap |
|---|---|---|
| **Memory structure** | LIFO (Last In, First Out) — like a stack of plates | Dynamic allocation — like a scattered storage warehouse |
| **Speed** | Very fast (just move pointer up/down) | Slower (must find free block, handle fragmentation) |
| **Size** | Small & fixed (typically ~1–8 MB per thread) | Large & flexible (limited by RAM) |
| **Allocation / deallocation** | Automatic — push on function call, pop on return | Manual (`malloc`/`free`) or garbage collected |
| **Lifetime** | Scope-bound — variable dies when its `{ }` block ends | Manual — lives until explicitly freed or GC runs |
| **What lives here** | Primitive values, local variables, function call frames | Objects, arrays, closures, large data structures |
| **Thread safety** | Each thread has its **own** stack | Heap is **shared** across threads (needs synchronization) |

---

## Code Example

```javascript
function greet(name) {
    let prefix = "Hello";
    let message = prefix + " " + name;
    return message;
}

let user = { id: 1, name: "Alice" };
let greeting = greet(user.name);
console.log(greeting);
```

---

### How the **Stack** Works

The stack is a contiguous block of memory managed with a **stack pointer** (SP). Each function call pushes a **stack frame** containing local variables, parameters, and the return address.

```
         HIGH MEMORY ADDRESS
        ┌────────────────────────────┐
        │       (previous frames)     │
        ├────────────────────────────┤  ←─ SP moves down when
        │  greet() frame             │      greet is called
        │  ┌──────────────────────┐  │
        │  │ name = "Alice" (ref) │  │
        │  │ prefix = "Hello"     │  │
        │  │ message = "Hello     │  │
        │  │          Alice" (ref)│  │
        │  └──────────────────────┘  │
        ├────────────────────────────┤  ←─ SP moves down
        │  global (main) frame       │      at program start
        │  ┌──────────────────────┐  │
        │  │ user      = (ref)     │  │
        │  │ greeting  = (ref)     │  │
        │  └──────────────────────┘  │
        ├────────────────────────────┤
        │  Stack grows DOWNWARD      │
        │  SP starts at top, moves   │
        │  down on push, up on pop   │
        └────────────────────────────┘
         LOW MEMORY ADDRESS
```

**Execution trace for our code:**

| Line executed | Stack state (after line runs) |
|---|---|
| `let user = { id:1, name:"Alice" }` | Global frame: `user → ref#001` (ref lives in heap) |
| `let greeting = greet(user.name)` | **Push** greet frame: `name = "Alice"`, `prefix = "Hello"`, `message = "Hello Alice"` |
| `return message` | Return value copied out, **pop** greet frame (memory reclaimed instantly) |
| `console.log(greeting)` | Global frame: `greeting = "Hello Alice"` (string lives in heap) |
| End of script | Global frame is **popped**, all stack memory reclaimed |

> **Key point:** When `greet()` returns, its entire stack frame vanishes in one operation — just move the stack pointer up. No cleanup code needed. This is why stack allocation is so fast.

---

### How the **Heap** Works

The heap is a large pool of memory where objects are allocated dynamically. The engine asks the OS for a block, and the runtime tracks which blocks are in use vs free.

```
          HEAP MEMORY (growing upward)
        ┌────────────────────────────┐
        │  String pool / interned     │
        │  "Hello"                    │
        ├────────────────────────────┤
        │  String                     │
        │  "Alice"   ←─ name points  │
        │              here           │
        ├────────────────────────────┤
        │  String                     │
        │  "Hello Alice"              │
        │  ←─ message & greeting      │
        │     point here              │
        ├────────────────────────────┤
        │  Object (ref#001)           │
        │  ┌──────────────────────┐  │
        │  │ id: 1                │  │
        │  │ name: ───────────────┼──┼──→ "Alice" string
        │  └──────────────────────┘  │
        │  ←─ user points here       │
        ├────────────────────────────┤
        │                            │
        │   (free space available)   │
        │                            │
        └────────────────────────────┘
```

**What goes on the heap in our example:**

| Value | Why it's on the heap |
|---|---|
| `{ id: 1, name: "Alice" }` | Object — size unknown at compile time, may be passed around by reference |
| `"Hello"` | String — dynamically sized, can't live on fixed-size stack |
| `"Alice"` | String — same reason |
| `"Hello Alice"` | Concatenated string — created at runtime, dynamic size |
| `user` variable itself | The **reference** (`ref#001`) is on the stack, but the **actual object** data is on the heap |

> **Key point:** The stack stores only **primitives** (numbers, booleans) and **references/pointers** to heap objects. The actual objects, arrays, and strings live on the heap.

---

### Visual: Stack + Heap Together

```
         STACK                          HEAP
    ┌──────────────┐              ┌──────────────┐
    │   main()     │              │  "Hello"     │
    │  user ───────┼──────────────┼──▶           │
    │ greeting ────┼──────────┐   │  "Alice"     │
    │              │          │   │  user.name───│
    │   greet()    │          │   └──────┬───────┘
    │  name ───────┼──────────┼──────────┘
    │  prefix      │          │   ┌──────▼───────┐
    │  "Hello"     │          │   │  { id: 1,    │
    │  message ────┼──────────┼───┼──▶ name ─────┼──▶ "Alice"
    └──────────────┘          │   └──────────────┘
                              │
                              │   ┌──────────────┐
                              │   │ "Hello Alice" │
                              │   │  ←── message  │
                              │   │  ←── greeting │
                              │   └──────────────┘
                              └────────────────────
```

---

## Stack Overflow vs Memory Leak

| Problem | Stack Overflow | Memory Leak |
|---|---|---|
| **Cause** | Infinite recursion / too-deep call stack | Heap references never released (forgotten) |
| **Example** | `function a() { a(); }` — never stops calling | `let arr = []; setInterval(() => arr.push(new Data()), 1000)` |
| **Result** | Crash — "Maximum call stack size exceeded" | RAM fills up, system slows down, eventually OOM |
| **Recovery** | Must fix the code (add base case) | Must nullify references or use weak structures |

---

## Summary

| Aspect | Stack | Heap |
|---|---|---|
| **Management** | Automatic (push/pop per call) | Manual or GC-driven |
| **Speed** | Lightning fast (pointer bump) | Moderate (allocation + eventual deallocation) |
| **Size limit** | Small (~MBs) | Large (up to available RAM) |
| **Lifetime** | Tied to function scope | Until garbage collected or freed |
| **Typical contents** | Primitives, references, return addresses | Objects, arrays, strings, closures |
| **Fragmentation** | None (perfectly sequential) | Possible (holes from alloc/free pattern) |
