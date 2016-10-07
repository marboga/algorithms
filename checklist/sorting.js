//Sorting - Implement versions of the following sorts, for numerical arrays: SelectionSort, BubbleSort or InsertionSort



function selectionSort(arr) {
	var i = 0
	while (i < arr.length) {
		var mindex = i
		for (var j = i; j < arr.length; j++) {
			if (arr[j] < arr[mindex]) {
				mindex = j
			}
		}
		var temp = arr[i]
		arr[i] = arr[mindex]
		arr[mindex] = temp
		i++
	}
	return arr
}
var array1 = [9,8,7,6,5,4,3,2,1]
// console.log(selectionSort(array1))


function insertionSort(arr) {
	for (var i = 1; i < arr.length; i++) {
		console.log(arr)
		var temp = arr[i];
		var j = i
		while (temp < arr[j - 1]) {
			if (j < 1) {
				arr[j] = temp
			} else {
				arr[j] = arr[j - 1] //shift right
			}
			j--
		}
		arr[j] = temp //put temp back in the array
		// console.log(arr)
	}
	return arr
}

// console.log(insertionSort(array1))

function merge(arr1, arr2) {
	var index1 = 0, index2 = 0;
	var resultArr = [];
	while(index1 < arr1.length && index2 < arr2.length) {
		if (arr1[index1] < arr2[index2]) {
			resultArr.push(arr1[index1]);
			index1++;
		} else {
			resultArr.push(arr2[index2]);
			index2++;
		}
	}
	// console.log(arr1, arr2, resultArr);
	if (index1 === arr1.length) {
		for (var i = index2; i < arr2.length; i++) {
			resultArr.push(arr2[i]);
		}
	} else {
		for (var i = index1; i < arr1.length; i++) {
			resultArr.push(arr1[i]);
		}
	}
	// console.log(arr1, arr2, resultArr);
	return resultArr;
}

// var firstArr = [1,3,5,6,9]
// var secondArr = [2,4,7,8]
// console.log(merge(secondArr, firstArr))

function mergeSort(arr) {
	if (arr.length === 1) {
		return arr;
	}
	var left = mergeSort(arr.slice(0,Math.floor(arr.length/2)))
	var right = mergeSort(arr.slice(Math.floor(arr.length/2)));
	console.log("left", left, "right", right)
	return merge(left, right)
}
console.log(mergeSort([9,8,7,6,5,4,3,2,1]))
