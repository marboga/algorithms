//Recursion - Implement standalone functions for the following, using recursion:  Fibonacci(num), Factorial(num), SumOfSquares(upToNum), BstSize(bstRootNode)

function rFibonacci(num) {
	if (num < 1) {return 0}
	if (num < 3) {
		return 1
	} else {
		return rFibonacci(num - 1) + rFibonacci(num - 2)
	}
}
// console.log(rFibonacci(7))

function rFactorial(num) {
	if (num < 1) {return 0}
	if (num == 1) {return 1}
	return num * rFactorial(num - 1)
}
// console.log(rFactorial(9))

function sumOfSquares(upToNum, sum, arr, str, base) {
	// start of method
	// var startTime = new Date();
	// startTime = startTime.getTime();
	sum = sum || 0; arr = arr || []; str = str || ""; base = base || 1;
	var square = base * base;
	if (square > upToNum) {return}
	else if (sum+square == upToNum) {
		if (str) {
			arr.push(str +" + "+ square);
			var newStr = str + " + " + square;
		} else {
			arr.push(square);
			var newStr = str + square;
		}
	} else {
		sumOfSquares(upToNum, sum, arr, str, base+1)
		sumOfSquares(upToNum, sum+square, arr, newStr, base+1)
		return arr;
	}
	//end of method
	// var endTime = new Date();
	// var timeResults = endTime - startTime
	// console.log("time taken to do request,", timeResults)
}
console.log(sumOfSquares(1000))

function bstSize() {
	return "see binarysearchtrees.js"
}
