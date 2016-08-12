var array = [1,2,3,4,-8,6,12]
// Push Front
// Given array and an additional value, insert this value at the beginning of the array.
//
function pushFront(arr, value) {
	for (var i = arr.length; i > 0; i--) {
		arr[i] = arr[i - 1];
	}
	arr[0] = value;
	return arr;
}
// console.log(pushFront(array, 3))

// Pop Front
// Given array, remove and return the value at the beginning of the array. Do this without using any built-in array methods such as pop().
//
function popFront(arr) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i+1];
	}
	arr.length -= 1;
	return arr;
}
// console.log(popFront(array));

// Insert At
// Given array, index, and one additional value, insert the value into array at given index. You can think of PushFront(arr,val) as equivalent to InsertAt(arr,0,val).
//
function insertAt(arr, index, value) {
	for (var i = arr.length; i >= index; i--) {
		arr[i] = arr[i - 1];
	}
	arr[index] = value;
	return arr;
}
// console.log(insertAt(array, 2, 99))

// Remove At
// Given array and an index in the array, remove and return the array value for that index. Do this without using built-in array methods except pop(). Think of PopFront(arr) as equivalent to RemoveAt(arr,0).
//
function removeAt(arr, index) {
	var temp = arr[index];
	for (var i = index; i < arr.length; i++) {
		arr[i] = arr[i + 1];
	}
	arr.length -= 1;
	return (arr, temp)
}
// console.log(removeAt(array, 3))
// console.log(array)

// Swap Array Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change final element. For [1,2,3,4], return [2,1,4,3]. For [false,true,42], return [true,false,42].
//
function swapPairs(arr) {
	for (var i = 0; i < arr.length-1; i++) {
		if (i % 2 == 0) {
			var temp = arr[i];
			arr[i] = arr[i + 1];
			arr[i + 1] = temp;
		}
	}
	return arr;
}
// console.log(swapPairs(array))

// Array Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together.
//
var sortedArr = [-20,-20,1,3,3,3,4,4,5,6,7,7,7,9]
function deDupe(arr) {
	var numberOfDuplicates = 0;
	var index = 0;
	while (index < arr.length) {
		var nextUniqueIdx = index + 1
		while (arr[index] === arr[nextUniqueIdx]) {
			numberOfDuplicates++;
			nextUniqueIdx++;
		}
		console.log(arr[index], arr[nextUniqueIdx]);
		index++;
		if (nextUniqueIdx) {
			arr[index] = arr[nextUniqueIdx]
		} else {
			console.log(index, arr, "noasfasf")
		}
		// console.log(index, "index")
	}
	return arr;
}
console.log(deDupe(sortedArr))

// Reverse array
// Given a numerical array, reverse the order of the values. The reversed array should have the same length, with existing elements moved to other indices so that the order of elements is reversed. Don’t use a second array – move the values around within the array that you are given.
//

// Remove negatives
// Implement removeNegatives() that accepts an array and removes any negative values from that array.

// Remove negatives
// Implement removeNegatives() that accepts an array, removes negative values, and returns the same array (not a copy), preserving non-negatives’ order.
// Additional: Don't use nested loops
//

// Second-to-last
// Return the second-to-last element of an array. Given [42,true,4,"Liam",7], return "Liam". If array is too short, return null.
//

// Nth-to-last
// Return the element that is N-from-array’s-end. Given ([5,2,3,6,4,9,7],3), return 4. If the array is too short, return null.
