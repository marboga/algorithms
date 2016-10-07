var board = [
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,1,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
]

function isChessMoveThreatened(board, x, y){
	for (var n = 0; n < 8; n++){
		if (board[n][x] === 1) {
			return true;
		}
		else if (board[y][n] === 1){
			return true;
		}

	}
	return false;
}
console.log(isChessMoveThreatened(board, 2, 1))

function eightQueens(board, x, y, queensRemaining){
	queensRemaining = queensRemaining || 8;
	x = x || 0;
	y = y || 0;
	if (queensRemaining === 0 || x > 8 || y > 8) {
		return board;
	}
	// eightQueens(board, x, y, queensRemaining)

	if (isValidToPlace(board, x, y) === true){
		board[y][x] = 1;
		eightQueens(board, x+1, y, queensRemaining - 1)
		eightQueens(board, x, y+1, queensRemaining - 1)
	}

}
// console.log(eightQueens(board))

//here is what we want:
//for each x and y:
//if possible to put a queen on it,
//both try and do not try putting a queen on it.
//queen cannot go on it if anything x or y of it is 1 or diagonal
//if x > 8 or y > 8, break
//if queens remaining == 0, return
