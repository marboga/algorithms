function rPerms(word, substr, result){
	substr = substr || "";
	result = result || [];
	if (!word.length){
		result.push(substr);
		return result;
	}
	for (var i = 0, len = word.length; i < len; i++){
		var letter = word[i];
		var newWord = word.slice( 0, i ) + word.slice( i + 1 );
		rPerms(newWord, substr+letter, result);
	}
	return result;
}


console.log(rPerms('hearing'))
