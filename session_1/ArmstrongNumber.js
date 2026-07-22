class ArmstrongNumber 
{
    // Static methods belong to the class itself, just like Java
    static armstrongNum(armNumber) 
    {
        let result = 0;
        let num = armNumber;
        let rem;

        while (num !== 0) 
        {
            rem = num % 10;
            result = result + (rem * rem * rem);
            num = Math.floor(num / 10);
        }

        if (armNumber === result) 
        {
            console.log("Given number is armstrong number = " + armNumber);
        } 
        else 
        {
            console.log("Given number is not armstrong number = " + armNumber);
        }
    }
}

// Executing the static class method (No instantiation needed)
ArmstrongNumber.armstrongNum(153); 
