function sumOfSquares(number, arr, base, result) {
	var origNum = number
	result = result || []
	arr = arr || []
	base = base || 1
	if ( number == 0 ) {
		result.push(substr)
	}
	if ( number < 0 ) {
		return
	}
	arr.push(base*base)
	sumOfSquares(number -= base*base, arr, ++base, result)
	arr.pop()
	sumOfSquares( number, arr, ++base, result )
	// if ( base * base > number) { return }

	return {"number": number, "arr": arr, "base": base, "result": result}
	}

console.log(sumOfSquares(100))
//
// function sumOfSquares2(num){
// var counter = Math.floor(Math.sqrt(num));
// var marray = [];
// while (counter > 0){
//  var subCounter = counter;
//  var subNum = num
//  var mstring = "";
//  while (subCounter >= 1){
//    if (subCounter == 1 && subNum == 1){
//      mstring += "+1";
//      marray.push(mstring);
//    }
//
//    if (subNum - subCounter*subCounter >= 0){
//      mstring += "+"+subCounter*subCounter;
//      subNum -= subCounter*subCounter;
//    }
//    if (subNum == 0){
//      marray.push(mstring);
//      break;
//    }
//    subCounter --;
//  }
//  counter --;
// }
// return marray;
// }
//
// console.log(sumOfSquares2(200))
