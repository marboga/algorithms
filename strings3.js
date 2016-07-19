function acronyms(str) {
	var newString = ""
	//error check for too many spaces, etc , can i assume i will be getting a nice string given to me?
	for (var i = 0; i < str.length - 1; i++) {
		if (str[i] === " ") {
			newString += str[i+1]
			// console.log(newString)
		}
	}
	return newString.toUpperCase()
}
var string = " live from new york - it's saturday night!  "

// console.log(acronyms(string))


function romanNumerals(int) { //integer less than 4000
	if (int > 4000) { return "Invalid Input" }
	var result = ""
	var thous = Math.floor(int / 1000)
	for (var t = 1; t <= thous; t++) {
		result += "M"
	}
	var hund = Math.floor((int % 1000) / 100)
	console.log(hund, "hund")
	switch (hund) {
		case 5:
			result += "D";
			break;
		case 4:
			result += "CD";
			break;
		default:
			for (var h = 1; h <= hund; h++) {
				result += "C"
			}
			break;
	}
	var tens = Math.floor((int % 100) / 10)
	console.log(tens)



	return result
}
// i v x l c d m
// console.log(romanNumerals(3342))

function allValidParens(number){
	var result = [];
	parens("", number, number, result)
	return result
}

function parens(str, opens, closes, result) {
	if (opens === 0 && closes === 0) {
		result.push(str);
		console.log(result.length)
		return result
	}
	if (opens > 0) {
		parens(str + "(", opens - 1, closes, result)
	}
	if (closes > opens) {
		parens(str + ")", opens, closes -1, result)
	}
}

// console.log(allValidParens(5))

function longestPalindrome(num) {
	var largestPal = 0;
	var num2 = num
	while (num > 0) {
		var pal = isPal(num * num2)
		if (pal > largestPal) {
			largestPal = pal
		}
		pal--
	}
	return pal
}
console.log((123).length)
// function isPal(number) {
// 	for (var i = 0; i < number.length; number++)
// }

function coinChangeWithObject(cents){
	var obj = {'dollar coin': 0, 'quarter': 0, 'dime': 0, 'nickel': 0, 'penny': 0};
	while (cents >= 100) {
		obj['dollar coin'] += 1;
		cents -= 100;
	}
	while (cents >= 25) {
		obj['quarter'] += 1;
		cents -= 25;
	}
	while (cents >= 10) {
		obj['dime'] += 1;
		cents -= 10;
	}
	while (cents >= 5) {
		obj['nickel'] += 1;
		cents -= 5;
	}
	while (cents >= 1) {
		obj['penny'] += 1;
		cents -= 1;
	}
	// console.log(obj)
	return obj
}

console.log(coinChangeWithObject(324))

function minMaxAvgWithObject(arr) {
	var obj = {};
	obj['min'] = arr[0];
	obj['max'] = arr[0];
	obj['sum'] = 0;
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > obj['max']) {
			obj['max'] = arr[i]
		} else if (arr[i] <  obj['min']) {
			obj['min'] = arr[i]
		}
		obj['sum'] += arr[i]
	}
	return "min: " + obj['min'] + ", max: " + obj['max'] + ", avg: " + obj['sum'] / arr.length
}
var array = [1,3,46,7,8,4,32,6,9,3]
console.log(minMaxAvgWithObject(array))
