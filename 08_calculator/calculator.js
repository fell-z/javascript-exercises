const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return (total = arr.reduce((sum, number) => sum + number, 0));
};

const multiply = function (arr) {
  return (total = arr.reduce((sum, number) => sum * number, 1));
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  for (let antecessor = num - 1; antecessor >= 1; antecessor--) {
    num *= antecessor;
  }
  return num || 1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
