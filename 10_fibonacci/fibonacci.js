const fibonacci = function (value) {
  value = Number(value);
  if (value < 0) {
    return "OOPS";
  } else if (value == 1) {
    return 1;
  }
  let a = 0,
    b = 1,
    c,
    d;
  for (let i = 1; i <= value; i++) {
    d = c;
    c = a + b;
    a = b;
    b = c;
  }
  return d;
};
// Do not edit below this line
module.exports = fibonacci;
