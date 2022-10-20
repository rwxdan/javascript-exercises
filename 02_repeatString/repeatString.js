const repeatString = function (string, num) {
	let count = 0;
	let word = string;
	while (count < num) {
		count++;
	}
	if (num < 0) {
		return "ERROR";
	} else {
		return word.repeat(count);
	}
};

// Do not edit below this line
module.exports = repeatString;
