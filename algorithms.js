<script type="text/javascript">

var myStr = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

function numberOfEachLetter(str){
	var obj = {};
	for(var i = 0; i < str.length; i++){
		console.log("before iteration", obj)
		if( obj[str[i]] ) {
			obj[str[i]]++;
		}
		else(
			obj[str[i]] = 1
			)
	}
	return obj;
}
console.log(numberOfEachLetter(myStr));


/*
This is an algorithm for Project Euler, problem # 2.
The goal is to calculate the sum of even Fibonacci terms whose values
do not exceed four million.
*/
function even_fibonacci() {}
	var array = [1,2];
	var sum = 0;

	for (var next = 3; next < 1000; next = array[array.length] + array[(array.length - 1)]){
  	array.push(next);
  	if (next % 2 === 0){
  		sum = sum  + next;
  	}
  	return sum;
	}
}

//bubble sort
var array = [3,6,8,2,5,2,7,1]

function bubbleSort(arr) {
	var count = 1;
	var temp = 0;
	while(swapped === true;){
		for(var i = 1; i < arr.length - count; i++){
			var swapped = false;
			if(arr[i] > arr[i + 1]){
				temp = arr[i + 1];
				arr[i + 1] = arr[i];
				arr[i] = temp;
				swapped = true;
			}
			count++;
		}
		return arr;
}


</script>
