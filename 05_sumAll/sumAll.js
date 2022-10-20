const sumAll = function (fromNum, toNum) {
	let numArr = [];
	let sumArr = 0;

	if (typeof fromNum != "number" || typeof toNum != "number") {
		return "ERROR";
	} else if (fromNum < 0 || toNum < 0) {
		return "ERROR";
	} else if (fromNum < toNum) {
		for (let items = fromNum; items <= toNum; items++) {
			numArr.push(items);
		}
	} else if (fromNum > toNum) {
		for (let items = fromNum; items >= toNum; items--) {
			numArr.push(items);
		}
	}

	for (let i = 0; i < numArr.length; i++) {
		sumArr += numArr[i];
	}
	return sumArr;
};

// Do not edit below this line
module.exports = sumAll;
