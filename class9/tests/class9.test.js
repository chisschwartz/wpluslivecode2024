const classStuff = require("../class9.js");

describe("Greeting function", function () {
  test("should say hello", function () {
    expect(classStuff.greetMe()).toBe("hello");
  });

  test("should not say bonjour", () => {
    expect(classStuff.greetMe()).not.toBe("bonjour");
  });
});

describe("Hockey player object", () => {
  test("has a name", () => {
    expect(classStuff.player.name).toContain("McDavid");
  });

  test("has a number", () => {
    expect(classStuff.player.number).toBe(93);
  });

  test("has a goal total", () => {
    expect(classStuff.player.goals).toBe(0);
  });

  test("can add to goals", () => {
    expect(classStuff.player.addGoal(1)).toBe("GOAL!!!");
  });

  test("if goals added is 3 more or more, hat trick", () => {
    expect(classStuff.player.addGoal(3)).toBe("HAT TRICK!");
  });
});
