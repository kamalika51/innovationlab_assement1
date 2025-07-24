const sayHi = function () {
  console.log("Hi! This is a function expression.");
};

const arrowGreet = () => {
  console.log("Hello from an arrow function!");
};

const sumArrow = (a, b) => {
  const sum = a + b;
  console.log(`Sum using arrow function: ${sum}`);
  return sum;
};
