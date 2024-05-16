// for (let index = 0; index < 10; index++){
//     console.log(index);
// }

// let index = 10;
// while (index > 0){
//     console.log(`Hello! ${index}`);
//     index--;
// }

const input = require('readline-sync');

let keepGoing = true;

while (keepGoing) {
    console.log('Welcome to Amazon: The Original');
    const wantToBuy = input.question('Do you want to buy books? (y/n)');

    if (wantToBuy !== 'y') {
        console.log("I don't want to sell to you anyway!");
        keepGoing = false;
        break;
    }

    console.log('How many books do you want to buy?');
    const numberToBuy = input.question('Enter the number of books: ')

    const booksToBuy = [
        'Charlie the Cholocate Factory',
        'A Court of Thorns and Roses',
        'Starling House',
        'House of Loaves'
    ]
    const booksBought = [];
    for (let index = 0; index < numberToBuy; index++) {

        for (let indexj = 0; indexj < booksToBuy.length; indexj++){
            console.log(`${indexj + 1}: ${booksToBuy[indexj]}`);
        }
        const bookChoice = input.question('What book do you want?');
        booksBought.push(booksToBuy[bookChoice - 1])
    }

    console.log(`You bought: ${booksBought.join(',')}`);

    const leave = input.question('Do you want to start over? (y/n)');
    if (leave === 'n') {
        keepGoing = false;
    }
}
