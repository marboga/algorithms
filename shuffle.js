function fisherYatesShuffle(array) {
	var unshuffled = array.length;
	var temp;
	var rand;

	// While there remain elements to shuffle…
	while (unshuffled) {
		// Pick a remaining element…
		rand = Math.floor(Math.random() * unshuffled--);
		// And swap it with the current element.
		temp = array[unshuffled];
		array[unshuffled] = array[rand];
		array[rand] = temp;
	}

	return array;
}
var newArr = [];
// for (var i = 0; i < 30000; i++) {
// 	newArr.push(fisherYatesShuffle([1,2,3]))
// }
console.log(newArr)
