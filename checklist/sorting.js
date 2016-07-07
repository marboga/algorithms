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
var array1 = [9,8,7,6,5,4,3,2,1,0]
// console.log(selectionSort(array1))


function insertionSort(arr) {
	
}
