// function sumOfSquares(num, subArr, sum, square, result) {
// 	subArr = subArr || [] 	//holds attempted numbers
// 	sum = sum || 0 			//holds sum in subArr
// 	result = result || []	//holds complete strings
// 	square = square || 1		//the current number
//
// 	// if (Math.pow(square, 2) > num) return "wigggg"
// 	if (sum > num) {
// 		console.log(square, "too big")
// 		return "jehosephat"
// 	} else if (num === sum) {
// 		console.log(square, "num is sum", subArr)
// 		var i = 0;
// 		var str = "";
// 		while (i < subArr.length - 1) {
// 			str += subArr[i] + " + "
// 			i++
// 		}
// 		str += subArr[i];
// 		result.push(str);
// 		return result;
// 	} else {
// 		subArr.push(square * square)
// 		sumOfSquares(num, subArr, sum, square+1, result)
// 		console.log("sum", sum, square*square)
// 		console.log(square, "else", sum, subArr)
// 		// subArr.pop()
// 		sumOfSquares(num, subArr, sum, square+1, result)
// 	}
// 	return result
// }
//
// function sumOfSquares(num, sub, sum, sq, result) {
// 	result = result || []
// 	sq = sq || 1
// 	sub  = sub || ""
// 	sum = sum || 0
// 	if (sq === 0) {
// 		console.log('square is zero, sub sq result', sub, sq, result, sum)
// 		return
// 	}
// 	if (sum === num) {
// 		console.log('here sub sq result sum', sub, sq, result, sum)
// 		result.push(sub)
// 		sub = ""
// 		// sumOfSquares(num, "", sq += 1, result)
// 	}
// 	else if (sum > num) {
// 		console.log('square too big, sub sq result', sub, sq, result, sum)
// 		return
// 	}
// 	var newsub = ""
// 	if (sub === "") {
// 		newsub = sq*sq
// 	} else {
// 		newsub = sub + " + " + sq*sq
// 	}
// 	sumOfSquares(num, newsub, sum += sq*sq, ++sq, result)
// 	// sumOfSquares(num, sub + " + " + sq*sq, sum += sq*sq, sq += 2, result)
// 	// sumOfSquares(num, sub, sum, ++sq , result)
//
// 	return result
// }
//

// break: num == 0, push
// break: no values left
//

// function sumOfSquares(num, str, result, base) {
// 	var result = result || []
// 	var max = Math.floor(Math.sqrt(num))
// 	console.log("max value", max)
// 	var str = str || ""
// 	var base = base || max
//
// 	if (num == 0) {
// 		console.log("pushing", str)
// 		result.push(str)
// 	}
// 	if (num - Math.pow(base, 2) > 0) {
// 		console.log('going')
// 		str += " + " + base*base
// 		num -= base*base
// 	}
// 	sumOfSquares(num, str, result, --base)
//
// 	return result
// }

function sumOfSquares(num, str, base, result) {
	result = result || [];
	str = str || "";
	base = base || Math.floor(Math.sqrt(num));
	console.log('top')
	if (base < 1 || num < 0) {
		console.log("uh oh")
		return
	}
	if (base == 1) {
		console.log("base = 1, num = ", num)
		if (num === 1) {
			console.log('this combo works1',num,"<-num", str, "<-str", base, "<-base", result, "<-result")
			result.push(str + 1);
			return
		}
		if (num == 0) {
			result.push(str)
			console.log('this combo works2',num,"<-num", str, "<-str", base, "<-base", result, "<-result")
			return
		}

	}

	if (num > 0) {
		console.log("num > 0 ::::", num, "<n", str, "<s",  base, "<b", result)
		if (str !== "") {
			var newStr = str + " + " + (base*base)
		} else {
			newStr = "" + base*base
		}
		sumOfSquares(num - (base*base), newStr, --base, result)
		sumOfSquares(num, str, --base, result)
	}
	// sumOfSquares(num, str, --base, result)
	console.log('at bottom')
	return result
}


// console.log(sumOfSquares(100))

function sumOfSquares2(num) {
	var result = [];
	var base = 1;
	var max = Math.floor(Math.sqrt(num))
	var substr = ""
	var sum = 0;

	while (base <= max) {
		var tempNum = num
		sum += base*base
		if (substr == "") {
			substr += base*base
		} else {
			substr += " + " + base*base
		}
		if (sum == num) {

		}
	}





	return result;
}
console.log(sumOfSquares2(10))
