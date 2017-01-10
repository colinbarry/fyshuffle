var fyshuffle = require('../fyshuffle.js')
	tape = require('tape');

tape.test("shuffle an array", function(t){
	var arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29],
		result = arr.slice(0);

	fyshuffle(arr);

	for (var i = 0; i < result.length; ++i) {
		t.notEquals(-1, arr.indexOf(result[i]));
	}

	t.end();
});

tape.test("shuffle an empty array", function(t){
	var arr = [],
		result = arr.slice(0);

	fyshuffle(arr);

	t.deepEquals(arr, result);

	t.end();
});

tape.test("shuffle an array of 1 element", function(t){
	var arr = [2],
		result = arr.slice(0);

	fyshuffle(arr);
	
	t.deepEquals(arr, result);

	t.end();
});

tape.test("shuffle an array of 2 elements", function(t){
	var arr = [2, 3],
		result = arr.slice(0);

	fyshuffle(arr);

	for (var i = 0; i < result.length; ++i) {
		t.notEquals(-1, arr.indexOf(result[i]));
	}

	t.end();
});

