/*
1. [Easy]-Which loop is guaranteed to execute its body at least once,even when its 
           condition is initially false?
Answer: C-do-While Loop***************************

- A) `for` 
- B) `while` 
- C) `do…while` 
- D) All three


Q2. [Easy]-What is the output?
for (let i = 0; i < 3; i++)
 {
  console.log(i);
}
Answer: A-0,1,2*******************************

- A) 0 1 2
- B) 1 2 3
- C) 0 1 2 3
- D) 1 2

Q3. [Easy]-What is the output?
let i = 0;
while (i < 5) 
{
  i++;
}
console.log(i);
Answer: B-5***********************************

- A) 4
- B) 5
- C) 0
- D) Infinite loop

Q4. [Easy]-What is the output?
let i = 10;
do {
  console.log(i);
} 
  while (i < 5);

Answer:A-10*****************************8
- A) Prints 10
- B) Prints nothing
- C) Prints 10 five times
- D) Infinite loop


Q5. [Easy]-What is the output?
let count = 0;
for (let i = 5; i < 5; i++) 
{
  count++;
}
console.log(count);

Answer:A-0***********************************
- A) 0
- B) 5
- C) 1
- D) Infinite loop

var sum = 0;
for (var i = 1; i <= 5; i++);
  sum += i;
console.log(sum);
Answer:
A) 15
B) 6
C) 0
D) SyntaxError


let i = 0;
while (i < NaN) {
  i++;
}
console.log(i);
Answer:
A) 0
B) Infinite loop
C) NaN
D) 1


Q3. [Medium] What is the output?
let i = 3, count = 0;
do {
  count++;
} while (i-- > 0);
console.log(count + " " + i);
Answer:
A) 3 0
B) 4 0
C) 4 -1
D) 3 -1
*/