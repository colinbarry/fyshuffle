/**
* Shuffles an array in place. This shuffle is performed using the Fisher-Yates
* algorithm, which is both unbiased and efficient in terms of time and space.
* @param {array} array the array to shuffle.
* @returns {array} a reference to array.
* @example
* var shuffled = require('fyshuffle')([2, 3, 5, 7, 11]);
*/
function fyshuffle(array) {
	var remaining = array.length;

	while (remaining > 0) {
		var pos = Math.floor(Math.random() * remaining),
			tmp = array[pos],
			end = remaining - 1;

		array[pos] = array[end];
		array[end] = tmp;

		--remaining;
	}

	return array;
}

module.exports = fyshuffle;
