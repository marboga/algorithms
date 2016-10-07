//swapPairs, reverseArr, removeNegs

function swapPairs(arr) {
	if (arr.length < 2) {return arr}
	for (var i = 0; i < arr.length; i++) {
		if (i % 2 == 1) {
			var temp = arr[i];
			arr[i] = arr[i-1];
			arr[i-1] = temp;
		}
	}
	return arr;
}
// console.log(swapPairs([1,2,3,4,5,6,7,8,9]))

function reverseArr(arr) {
	for (var i = 0; i < Math.floor(arr.length / 2); i++) {
		var last = arr.length - 1 - i
		var temp = arr[last];
		arr[last] = arr[i];
		arr[i] = temp;
	}
	return arr;
}


// console.log(reverseArr([1,2,3,4,5,6,7,8,9]))

function removeNegatives(arr) {
	var count = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			var j = i + 1;
			while (j < arr.length) {
				if (arr[j] < 0) {
					j++
					count++
				}
			}
			arr[i] = arr[j];
		}
	}
	return arr
}
// console.log(removeNegatives([-1,-2,3,-4,5,6,7,8,-12]))

var array = [0,-4,5,1,-4, 8, 2, -8, 14];
function maxSubArray(arr) {
	var currentSum = 0;
	var info = {}
	var startIndex = 0;
	var currentMax = 0;
	while (startIndex < arr.length){
		for (var i = startIndex; i < arr.length; i++) {
			currentSum += arr[i]
			if (currentSum > currentMax) {
				currentMax = currentSum;
				info['endIndex'] = i;
				info['startIndex'] = startIndex;
				info['max'] = currentMax;
			}
		}
		currentSum = 0;
		startIndex++;
		console.log(info, startIndex, currentMax, currentSum);
	}
	return info
}
console.log(maxSubArray(array))
