// const firstNumber = 3;
// const secondNumber = 3;

// console.log(firstNumber * secondNumber);
// console.log(firstNumber + secondNumber);
// console.log(firstNumber - secondNumber);

const input = require('readline-sync');

const firstName = input.question('What is your name?');
const lastName = "Danger";

console.log(firstName + " the " + lastName);