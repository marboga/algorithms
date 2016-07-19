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

console.log(insertionSort(array1))
