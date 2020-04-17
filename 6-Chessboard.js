/*
Chessboard
Write a program that creates a string that represents an 8�8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size, outputting a grid
of the given width and height
*/

// with reminder operator (numbers of caracthres % === 8) { console.log(' ', '#', ' ', '#'...)

function chessboard() {
    for (let i = 1; i <= 8; i += 1) {
        if (i % 2 === 0) {
            console.log("#", "", "#", "", "#", "", "#", "");
        } else {
            console.log("", "#", "", "#", "", "#", "", "#");
        }
    }
}

chessboard();