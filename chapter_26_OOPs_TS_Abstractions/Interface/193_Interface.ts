/*we can achieve the abstraction with the help of:
1)Interface
2) ENums
3) Abstract class  */
/*in js- we use the object creation like below:
const user={name="john",
            age=30,
            emailid="abc@gmail.com"
            };
const user={name="john",
            emailid="abc@gmail.com"
            };    
//problem in consistency                     
            */

interface user// but in interface Structure should be same
{
    name:string;
    age:number;
    email:string;
}

/*
- Interfaces don't generate any JavaScript code. 
- They exist ONLY at compile time for type checking. After compilation, interfaces completely disappear from the output.
*/