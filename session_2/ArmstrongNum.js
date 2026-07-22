// Dynamic core function mapping directly to your Java method
function armstrongNum(armNumber) 
{
    let result = 0;
    let num = armNumber;
    let rem;

    while (num !== 0) {
        rem = num % 10;
        result = result + (rem * rem * rem);
        num = Math.floor(num / 10); // Math.floor replaces Java integer division
    }

    if (armNumber === result) {
        console.log("Given number is armstrong number = " + armNumber);
    } else {
        console.log("Given number is not armstrong number = " + armNumber);
    }
}

// Hardcoded initial execution test
armstrongNum(153);

/*--------------armstrongNumber User Input--------------*/
   /* const readline = require("readline");
    const rl = readline.createInterface({ input: process.stdin, output:
   process.stdout });

    rl.question("Enter number = ", (input) => {
        armstrongNum(parseInt(input, 10));
        rl.close();
    });*/

