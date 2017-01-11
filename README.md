fyshuffle
=========
Shuffle an array in place.

Usage
=====
Install using npm:

    npm install fyshuffle

Then use it as follows:

```javascript
	var fyshuffle = require('fyshuffle');
	var array = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
	fyshuffle(array);
	console.log(array);

// prints, for example: [13, 11, 7, 19, 2, 29, 3, 5, 17, 23]
```

## `require("fyshuffle")(array)`
Shuffles an array in place. This shuffle is performed using the Fisher-Yates 
algorithm, which is both unbiased and efficient in terms of time and space.

**Parameters**
* `array` the array to shuffle.

**Returns** A reference to `array`