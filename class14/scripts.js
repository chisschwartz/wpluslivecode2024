window.addEventListener("load", () => {
  const counter = document.getElementById("counter");
  const add1 = document.getElementById("increase-1");
  const minus1 = document.getElementById("subtract-1");
  const square = document.getElementById("square");
  const counterStart = 0;

  counter.innerHTML = counterStart;

  add1.addEventListener("click", () => {
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
    counter.style.backgroundColor = checkTotal(counter.innerHTML);
  });

  minus1.addEventListener("click", () => {
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
    counter.style.backgroundColor = checkTotal(counter.innerHTML);
  });

  square.addEventListener("click", () => {
    counter.innerHTML =
      parseInt(counter.innerHTML) * parseInt(counter.innerHTML);
    counter.style.backgroundColor = checkTotal(counter.innerHTML);
  });

  counter.addEventListener("dblclick", () => {
    counter.innerHTML = 0;
  });
});

const checkTotal = (total) => {
  if (total < 0) {
    return "red";
  } else {
    return "black";
  }
};
