
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
	let result = [];
	for (let i = 0; i < matrix.length; i++) {
		if (i % 2) {
			result = result.concat(matrix[i].reverse());
		} else {
			result = result.concat(matrix[i]);
		}
	}
	return result;
}

// One more solution
module.exports = function towelSort(matrix = []) {
	let result = matrix.map(function (item, index, array) {
		if (index % 2) {
			return item.reverse();
		} else {
			return item;
		}
	});
	let combineArr = result.reduce(function (previousValue, item) {
		return previousValue.concat(item);
	});
	return combineArr;
}
