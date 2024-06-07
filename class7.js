const input = require("readline-sync");

let keepGoing = true;

const book1 = {
  title: "Charlie the Chocolate Factory",
  price: 5.99,
  author: "Roald Dahl",
};
const book2 = {
  title: "A Court of Thorns and Roses",
  price: 23.99,
  author: "Sarah J. Maas",
};
const book3 = {
  title: "Starling House",
  price: 13.99,
  author: "Alix Harrow",
};
const book4 = {
  title: "House of Loaves",
  price: 43.99,
  author: "Mike Tully",
};

const booksToBuy = [book1, book2, book3, book4];

function runProgram() {
  while (keepGoing) {
    if (askIfWantToBuy() !== "y") {
      console.log("I don't want to sell to you anyway!");
      keepGoing = false;
      break;
    }

    console.log("How many books do you want to buy?");
    const numberToBuy = input.question("Enter the number of books: ");

    const booksBought = [];
    for (let index = 0; index < numberToBuy; index++) {
      showBookList(booksToBuy);
      booksBought.push(selectBook(booksToBuy));
    }

    const total = getTotal(booksBought);

    console.log(`You now owe: $${total}`);

    const leave = input.question("Do you want to start over? (y/n)");
    if (leave === "n") {
      keepGoing = false;
    }
  }
}
function askIfWantToBuy() {
  console.log("Welcome to Amazon: The Original");
  const wantToBuy = input.question("Do you want to buy books? (y/n)");
  return wantToBuy;
}

function showBookList(bookList) {
  for (let indexj = 0; indexj < bookList.length; indexj++) {
    console.log(
      `${indexj + 1}: ${bookList[indexj].title} - $${bookList[indexj].price}`
    );
  }
}

function selectBook(bookList) {
  const bookChoice = input.question("What book do you want?");
  return bookList[bookChoice - 1];
}

const getTotal = (booksSelected) => {
  let total = 0;
  for (let i = 0; i < booksSelected.length; i++) {
    total += booksSelected[i].price;
  }
  return total;
};

runProgram();
