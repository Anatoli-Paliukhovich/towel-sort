
// You should implement your task here.

module.exports = function towelSort(matrix) {
	let result = [];
	for (let i = 0; i < matrix.length; i++) {
		if (i % 2) {
			result = `${result},${matrix[i].reverse()},`;
		} else {
			result = `${result}${matrix[i]}`;
		}
	}
	return [result.split(',')];
}
