// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Declare a variable name and set its value as "Dane"
// We check if variable name is equal to "Mary". 
// If name variable is equal to "Mary", we console log "Hi, Mary!"
// If name variable is not equal to "Mary", we console log "How do you do?"

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declare a variable secret
// We declare a variable code that is equal to 123
// We check if code variable is equal to 123. If it is, secret variable is equal to "super" and code variable is multiplied by 2.
// We check if code variable is greater than 250. If it is, secret variable is equal to "duper".
// We console log the value of secret variable

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We declare a variable isStudent and set it equal to boolean "true"
// We declare a variable age and set it equal to 34
// We declare a variable zip and set it equal to 55407
// We start an else if statement that checks if variable isStudent is equal to "true" and if variable zip is greater than 8000.
// If they both check, we console log "You're a student on the West Coast!"
// We check if isStudent is equal to "false" and age is less than 30. If they both check, we console log
// "What are your hobbies?"
// We check if isStudent is equal to "true". If it is, we console log "Welcome to Prime!"
// If none of those conditions are met, we console log "How about the weather?"

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it equal to 1.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number++; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is equal to 'blue' and 
// colorTwo is equal to 'red', and mix is equal to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to equal 'purple'

/*
let colorOne = 'blue';
let colorTwo = 'red';
let mix = true;

if (mix === true) {
  colorOne, colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is equal to 40 and time is equal to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
let time = 4;

if (temp > 39 && time >= 4) {
  console.log( 'throw away the food!' );
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
let minAge = 21;

if(age >= minAge) {
  console.log( 'enter' );
} else {
  console.log( 'no entry' );
}
*/

