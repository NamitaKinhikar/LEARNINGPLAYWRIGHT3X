let num= 5;
let f1=1;
let f2=0;
let f3=0;
console.log("fabonacci series=");
for(let i=0;i<=num;i++)
{
 console.log(f3+" "); //"f3="+f3
 f3=f1+f2;
 f1=f2;
 f2=f3;
}
/*
output will be
fabonacci series=
f3=0
f3=1
f3=1
f3=2
f3=3
f3=5 */