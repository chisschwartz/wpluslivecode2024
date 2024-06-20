const greetMe = () => {
  return "hello";
};

const player = {
  name: "Connor McDavid",
  number: 93,
  goals: 0,
  addGoal: (goalsScored) => {
    if (goalsScored > 2) {
      return "HAT TRICK!";
    }
    return "GOAL!!!";
  },
};

module.exports = { greetMe, player };
