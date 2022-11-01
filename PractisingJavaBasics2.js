//if loop
//if  statement is used to specify a block of JavaScript code to be executed if a condition is true.

//if (condition) {
    //  block of code to be executed if the condition is true
//  }

//if (condition) {
    //  block of code to be executed if the condition is true
  //} else {
    //  block of code to be executed if the condition is false
  //}

//if (condition1) {
    //  block of code to be executed if condition1 is true
//} else if (condition2) {
    //  block of code to be executed if the condition1 is false and condition2 is true
//} else {
    //  block of code to be executed if the condition1 is false and condition2 is false
//} 

//e.g

if (hour < 18) {//Checking if hour is less than 18
    greeting = "Good day";//Variable greeting is assigned value "Good day"
  }

if (hour < 18) { // Checking if hour is less than 18
    greeting = "Good day";//If its true then Variable greeting is assigned value "Good day"
} else { //Else condtion if the first statment is not true
    greeting = "Good evening";//Variable greeting is assigned value "Good Evening"
}

const color = "red";
if (color == "red") {
    console.log("red");
  } else if (color == "blue") {
    console.log("blue");
  } else {
    console.log("green");
  }

//==================================================================================================================================================
//FOR LOOP

//Expression1 is executed (one time) before the execution of the code block.
//Expression 2 defines the condition
//Expression 3 is executed (everytime after code block has been executed e.g i++)

//for (expression 1; expression 2; expression 3) {
    // code block to be executed
  //}

for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
}
//==================================================================================================================================================
//FOR OF

//The JavaScript for of statement loops through the values of an iterable object.

const cars = ["BMW", "Volvo", "Mini"];//Creating a array

let text = "";//Creating empty variable
for (let x of cars) {//going through the array with for loop
  text += x; // Adding each time to text a car
}