// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

// Create the code and test each of the variables provided. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

//I will create a variable called temp
//I will use conditionals to determine if the variable "temp" is above, equal to, or below variable boiling point

//Notes on process; I initially had the "else if" statements swapped which would not give me an output of "212 is at boiling point". I swapped them after determining that the code was not properly executing due to the order that the conditionals were in.

// var temp = 35
// var temp = 350
// var temp = 212

// var temp = 35
// if (temp < 212) {
//   console.log("temp is below boiling point");
// } else if (temp > 212) {
//   console.log("temp is above boiling point");
// } else if (temp = 212) {
//   console.log("temp is at boiling point");
// }



// --------------------2) Create the code that will combine two arrays and return the length using the variables provided below. Expected output: 10

//I will use the .concat() accessor in order to combine the two arrays
//I will create a variable that holds the value of both given variables combined
//Verified that the arrays combined in terminal output


var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]

var comboArrays = myNumbers1.concat(myNumbers2);



// --------------------3) Create the code that will reverse the letters of a string using the test variables provided below. Expected output: "eilrahc", "atled"

// var myString1 = "charlie"
// var myString2 = "delta"



// --------------------4) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 15, 12

// var number1 = 42
// var number2 = 27

// var number1 = 7
// var number2 = 19



// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable is not a number using the two sets of test variables provided below. Expected output: "Your input is not a number", 3

// var numberRefactor1 = 42
// var numberRefactor2 = "hello"

// var numberRefactor1 = 27
// var numberRefactor2 = 24
