const greetMe = () => {
  return "hello";
};

const player = {
  name: "Connor McDavid",
  number: 93,
  goals: 0,
  addGoal: () => {
    player.goals = player.goals + 1;
  },
  addGoal2: function () {
    this.goals += 1;
  },
};

player.addGoal();
player.addGoal();
player.addGoal();
console.log(player);
player.addGoal2();
console.log(player);

module.exports = { greetMe, player };
