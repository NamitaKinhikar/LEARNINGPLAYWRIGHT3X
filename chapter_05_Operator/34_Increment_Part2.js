let a=10
console.log(++a + a + a++);//11+11+11
console.log(a);

let i=1;
let result= i++ + ++i ;//1--2+---3=1+3=4
console.log(result,i);

let x=10;
//console.log(x++ + ++x);//22
console.log(++x + ++x);
console.log(x);//12

//18th Jully task
let l=5;
let b= l-- - --l;//5--4--3=5-3=2
console.log(b, l);//2,3


let m=1;
let r= m++ > 1 ?m++ : ++m;
console.log(r,m);// 3, 3

let n=100;
console.log(n++ + ++n + n++ + ++n);//100+102+102+104=408
console.log(n);//104

console.log(--n + n--); //103+103----102 = 206
console.log(n);  //102

let y=32;
console.log(--y + y--); //31+31---30---->  62
console.log(y);  //30
