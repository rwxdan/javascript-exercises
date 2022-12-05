const palindromes = function (arg) {
  let a = "!";
  let b = ",";
  let c = ".";
  let d = " ";
  let argRev = arg.toLowerCase().split("").reverse();
  argRev = argRev.filter((i) => {
    if (i != a && i != b && i != c && i != d) {
      return i;
    }
  });
  let argClean = arg.toLowerCase().split("");
  argClean = argClean.filter((i) => {
    if (i != a && i != b && i != c && i != d) {
      return i;
    }
  });
  return argRev.join("") == argClean.join("");
};

// Do not edit below this line
module.exports = palindromes;
