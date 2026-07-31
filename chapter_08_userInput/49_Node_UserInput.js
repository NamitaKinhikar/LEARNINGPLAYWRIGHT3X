const readline=require("readline");

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Enter a Number: ",(input) => {
    let num=Number(input);
      if(num%2=== 0)
        {
          console.log(num +" is Even Number");
        }
    else
        { 
          console.log(num+ " is Odd Number");
        }
     rl.close();
});