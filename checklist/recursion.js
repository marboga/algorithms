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
	sum = sum || 0; arr = arr || []; str = str || ""; base = base || 1;
	var square = base * base;
	if (square > upToNum) {return}
	else if (sum+square == upToNum) {
		if (str) {
			arr.push(str +" + "+ square);
			newStr = str + " + " + square;
		} else {
			arr.push(square);
			newStr = str + square;
		}
	} else {
		sumOfSquares(upToNum, sum, arr, str, base+1)
		sumOfSquares(upToNum, sum+square, arr, newStr, base+1)
		return arr;
	}
}
// console.log(sumOfSquares(100))

function bstSize(root) {

}
