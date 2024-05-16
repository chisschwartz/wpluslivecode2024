const input = require('readline-sync');

console.log('Welcome to Amazon: The Original');
const wantToBuy = input.question('Do you want to buy books? (y/n)');

if(wantToBuy !== 'y'){
    console.log("I don't want to sell to you anyway!");
    return 0;
}

console.log('How many books do you want to buy?');
const numberToBuy = input.question('Enter the number of books: ')

if(numberToBuy >= 20){
    console.log("Awesome! Let's do business!!");
} else if(numberToBuy > 10 && numberToBuy < 20){
    console.log('That is okay, but I would rather bought more.');
} else {
    console.log('Go away, cheepskate!');
}

console.log('Of these, which is your favoite?');
console.log('1. Charlie the Cholocate Factory');
console.log('2. A Court of Thorns and Roses');
console.log('3. Starling House');
console.log('4. House of Loaves');
const favoriteBook = input.question('Enter your favorite book from the list:');
if(!favoriteBook){
    console.log('OMG, I love that!!!');
} else {
    console.log('That book is trash.');
}

