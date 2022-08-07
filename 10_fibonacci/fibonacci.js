const fibonacci = function (num) {
  if (+num < 0) return "OOPS";
  let a = 0,
    b = 1,
    sum = 0;
  for (let i = 0; i < +num - 1; i++) {
    sum = a + b;
    a = b;
    b = sum;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
