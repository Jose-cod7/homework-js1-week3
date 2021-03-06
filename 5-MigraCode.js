/*
MigraCode

Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Migra" instead of the
number, and for numbers divisible by 5 (and not 3), print "Code" instead.

When you have that working, modify your program to print "MigraCode" for
numbers that are divisible by both 3 and 5 (and still print "Migra" or "Code"
for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out
a significant percentage of programmer candidates. So if you solved it, your
labor market value just went up.)
*/
/*
The fisrt part:
function migraCodeNumbers() {
    for (let i = 1; i <= 100; i += 1) {
        if (i % 3 === 0) {
            console.log("Migra");
        } else if (i % 5 === 0) {
            console.log("Code");
        } else {
            console.log(i);
        }
    }
} 
*/

function migraCodeNumbers() {
    for (let i = 1; i <= 100; i += 1) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("MigraCode");
        }
        if (i % 3 === 0) {
            console.log("Migra");
        } else if (i % 5 === 0) {
            console.log("Code");
        } else {
            console.log(i);
        }
    }
}

migraCodeNumbers();