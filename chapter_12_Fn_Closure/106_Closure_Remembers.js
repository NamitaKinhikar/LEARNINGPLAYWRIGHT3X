function makeCounter(start = 0) 
{
    let count = start; 
    return {
        increment()
        { 
            count++;
        },
        decrement() 
        { 
            count--; 
        },
        get()
        { 
            return count; 
        }
    };
}
let counter = makeCounter(0);
counter.increment();//1
counter.increment();//2
counter.increment();//3
console.log(counter.get());  //3
counter.decrement();//3-1=2
console.log(counter.get());//2

// increment();