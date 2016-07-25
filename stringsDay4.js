// Strings and Associative Arrays Day 4
// Recreate these built-in functions from JavaScript’s string library:
// String.concat
// string1.concat(str2,str3,...,strX) - add string(s) to end of existing one. Return new string.
// String.slice
// string.slice(start,end) - extract part of a string and return in a new one. Start and end are indices into the string, with the first character at index 0. End param is optional and, if present, refers to one beyond the last character to include.
// Bonus: include support for negative indices, representing offsets from string-end. Example: string.slice(-1) returns the string’s last character.

function concat(str1, str2, strX) {
	var newString = ""
	console.log(arguments)
	for (var i = 0; i < arguments.length; i++) {
		newString += arguments[i]
	}
	return newString
}
console.log(concat("x", "y", "z", "abc"))

String.prototype.slyce = function(string, beginDex, enDex) {
	var newString = ""
	if (!enDex || string.length < enDex) {
		enDex = string.length;
	}
	for (var i = beginDex; i < enDex; i++) {
		newString += string[i];
	}
	return newString;
}

var stringo = "candy and cookies and pie"
console.log(stringo.slyce(stringo, 1,10))
