const removeFromArray = function (numArray, ...args) {
	args.forEach((item) => {
		if (numArray.includes(item)) {
			numArray.splice(numArray.indexOf(item), 1);
		}
	});
	return numArray;
};

// Do not edit below this line
module.exports = removeFromArray;
