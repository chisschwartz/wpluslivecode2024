const input = require('readline-sync');
const testName = input.question('What is your name?');

const nameArray = testName.toUpperCase().split(' ');
console.log(nameArray);
// console.log(nameArray);
// const firstName = nameArray[0];
// const lastName = nameArray[1];
// console.log(firstName);
// console.log(lastName);
const output = [];
const firstLetterFirstName = nameArray[0][0];
output.push(firstLetterFirstName);
const firstLetterLastName = nameArray[1][0];
output.push(firstLetterLastName);
if (nameArray.length > 2){
    const firstLetterThirdName = nameArray[2][0];
    output.push(firstLetterThirdName);
}
// console.log(firstLetterFirstName);
// console.log(firstLetterLastName);
// const output = [firstLetterFirstName, firstLetterLastName].join('')

const outputString = output.join('');
console.log(`Your initials are: ${outputString}`);

