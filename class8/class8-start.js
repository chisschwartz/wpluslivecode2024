const pigLatinDadJoker = () => {
  const jokeMaker = require("daddy-jokes");
  const pigLatin = require("piglatin");

  const outputJoke = jokeMaker();

  console.log(pigLatin(outputJoke));
};

module.exports = {
  pigLatinDadJoker: pigLatinDadJoker,
};
