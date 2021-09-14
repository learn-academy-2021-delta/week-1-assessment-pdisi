// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

// Create the code and test each of the variables provided. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

//I will create a variable called temp
//I will use conditionals to determine if the variable "temp" is above, equal to, or below variable boiling point

//Notes on process - I initially had the "else if" statements swapped which would not give me an output of "212 is at boiling point". I swapped them after determining that the code was not properly executing due to the order that the conditionals were in.

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
//I will verify that the arrays combined in terminal output
//I will create a console log for the new variable comboArrays with a length property attached to it
//Verified output is 10

//Notes on process - I used the syllabus to read through the concat accessor function as I knew that I needed to combine the two provided variables. Following that, I knew that I needed to find the length of the newly created combined variable, which I also found in the syllabus.

// var myNumbers1 = [3, 7, 0, 36, -9]
// var myNumbers2 = [8, -7, 22, 9, 13]
// var comboArrays = myNumbers1.concat(myNumbers2);
// console.log(comboArrays.length);


// --------------------3) Create the code that will reverse the letters of a string using the test variables provided below. Expected output: "eilrahc", "atled"

//I will combine the two variables with a concat accessor to create a new variable
//I will use the reverse mutator on the new variable to get the desired output

//Revisit this. Cannot figure out why reverse mutator does not work. I am assuming that reverse only works on arrays, but I was unable to successfully establish the given variables as an array.

// var myString1 = "charlie"
// var myString2 = "delta"
//
// console.log(myString1.reverse());




// --------------------4) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 15, 12

//I will establish a console.log() that allows includes a difference calculation

//Notes on process - I knew that I had to find a way to always subtract that smallest number from the largest number regardless of what value each variable held.
//I found the Math.max and Math.min at https://www.codegrepper.com/code-examples/javascript/get+the+smaller+number+js and then incorporated that into using the provided variables for a difference calculation.

// var number1 = 42
// var number2 = 27

// var number1 = 7
// var number2 = 19
// console.log(Math.max(number1, number2) - Math.min(number1, number2));




// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable is not a number using the two sets of test variables provided below. Expected output: "Your input is not a number", 3

//I copied my Math.max and Math.min code from question #4
//I will add in an if statement that identifies if the variable is a number or not

//Notes on process - I researched how to make the computer evaluate if the variable inputs are numbers or not. Following that, I assumed that the previous code used in #4 would function properly after using VAL.

// var numberRefactor1 = 42
// var numberRefactor2 = "hello"
//
// var numberRefactor1 = 27
// var numberRefactor2 = 24
//
// if (typeof(val) !== 'number') {
//   console.log("Your input is not a number");
// }
//   console.log(Math.max(numberRefactor1, numberRefactor2) - Math.min(numberRefactor1, numberRefactor2));
