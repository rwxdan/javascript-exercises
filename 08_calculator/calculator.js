const add = function (...args) {
  let value = args.reduce((a, b) => a + b, 0);
  return value;
};

const subtract = function (...args) {
  let value = args.reduce((a, b) => a - b);
  return value;
};

const sum = function ([...args]) {
  let value = args.reduce((a, b) => a + b, 0);
  if (Number(value)) {
    return Number(value);
  }
  return 0;
};

const multiply = function ([...args]) {
  let value = args.reduce((a, b) => a * b);
  if (Number(value)) {
    return Number(value);
  }
  return 0;
};

const power = function (...args) {
  let value = [];
  for (let i = 0; i < args.at(-1); i++) {
    value.push(args[0]);
  }
  return value.reduce((a, b) => a * b);
};

const factorial = function (arg) {
  if (arg <= 0) {
    return 1;
  }
  let value = [];
  for (let i = 1; i <= arg; i++) {
    value.push(i);
  }
  return value.reduce((a, b) => a * b);
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
