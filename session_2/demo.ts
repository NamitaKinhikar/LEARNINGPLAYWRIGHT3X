// It is the number same as the sum of cube of each element
function armstrongNum1(armNumber: number): void 
{
    let result: number = 0;
    let num: number = armNumber;
    let rem: number;

    while (num !== 0) 
    {
        rem = num % 10;
        result = result + (rem * rem * rem);
        num = Math.trunc(num / 10);
    }

    if (armNumber === result) {
        console.log("Given number is armstrong number = " + armNumber);
    } else {
        console.log("Given number is not armstrong number = " + armNumber);
    }
}

// Main execution call
armstrongNum1(153);
