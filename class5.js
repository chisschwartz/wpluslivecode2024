
const input = require('readline-sync');

let keepGoing = true;

function runProgram() {
    while (keepGoing) {

        if (askIfWantToBuy() !== 'y') {
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
            showBookList(booksToBuy);
            booksBought.push(selectBook(booksToBuy));
        }

        console.log(`You bought: ${booksBought.join(',')}`);

        const leave = input.question('Do you want to start over? (y/n)');
        if (leave === 'n') {
            keepGoing = false;
        }
    }
}
function askIfWantToBuy() {
    console.log('Welcome to Amazon: The Original');
    const wantToBuy = input.question('Do you want to buy books? (y/n)');
    return wantToBuy;
}

function showBookList(bookList) {
    for (let indexj = 0; indexj < bookList.length; indexj++) {
        console.log(`${indexj + 1}: ${bookList[indexj]}`);
    }
}

function selectBook(bookList) {
    const bookChoice = input.question('What book do you want?');
    return bookList[bookChoice - 1]
}

runProgram();
