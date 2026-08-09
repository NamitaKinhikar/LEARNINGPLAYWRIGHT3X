let a = 10
console.log(a);
if (true)
{ 
    console.log(a); //in that case it will throw reference error because we cant access
//  a without initialization in that block scope because of TDZ
    let a = 20;
}