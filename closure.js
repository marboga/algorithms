// var addNum = function (param) {
// 	var sum = undefined;
// 	function name(param) {
// 		if (param === undefined) {
// 			return sum;
// 		} else {
// 			if (sum === undefined) {
// 				sum = param;
// 			} else {
// 				sum += param;
// 			}
// 			return addNum()
// 		}
// 	}
		// return name
//
// }
// console.log(addNum())
function addNum(param) {
	if (param === undefined) {
		return param;
	}
	function secondFunc(sameParam) {
		if (sameParam === undefined) { return param }
		param += sameParam;
		return secondFunc;
	}
	return secondFunc;
}

console.log(addNum(3)(0)(-80)(200)())
