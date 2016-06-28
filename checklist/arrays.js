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
console.log(reverseArr([1,2,3,4,5,6,7,8,9]))
