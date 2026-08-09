function makeRateLimiter(limit) 
{
    let call = 0;
    function check() 
    {
        call++;
        console.log(`call:${call} limit:${limit}`);
        return call <= limit;
    }
    return check;
}

let limiter = makeRateLimiter(3);
console.log(limiter());//1
console.log(limiter());//2
console.log(limiter());//3
console.log(limiter());//4