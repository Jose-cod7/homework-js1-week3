/*
Sum
If we sum all even numbers between 50 and 100 what is the result?
Build a function, that calculates the sum of all even numbers between a start number and end number
*/

function sumEvenNumbers() {
    let sum = 0;
    for (let i = 50; i <= 100; i += 1) {
        if (i % 2 === 0) {
            sum += i; {
                console.log(sum);
            }
        }
    }
}
//for (let i = 50; i <= 100; i += 2) {
//  console.log("The even numbers is " + i);
//}

sumEvenNumbers();