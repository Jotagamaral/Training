//If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

//Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

//[ [0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0] ]

//We want our function to return:
//-1 if the board is not yet finished AND no one has won yet (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).

function isSolved(board) {

    var w = -1 // there are empty spots 
    const allEqual = arr => arr.every(val => val === arr[0]);

    // Check if game is draw, 'X' or 'O'
    for (let i = 0; i < board.length; i++) {
        
            w = (allEqual(board[i]) && board[i][i] != 0) ? board[i][0] : w // Game on line
            w = (allEqual([board[0][i], board[1][i], board[2][i]]) && board[0][i] != 0) ? board[0][i] : w // Game on collums
            w = (allEqual([board[0][0], board[1][1], board[2][2]]) && board[0][0] != 0) ? board[0][0] : w // Game on diagonal foward
            w = (allEqual([board[0][2], board[1][1], board[2][0]]) && board[0][2] != 0) ? board[0][2] : w // Game on diagonal backward
            w = (!board[0].includes(0) && !board[1].includes(0) && !board[2].includes(0)) ? 0 : w // Check if the game is over or not       
    }   
    return w
}

console.log(isSolved([  [1,2,0],
                        [0,1,2],
                        [0,0,1]]), 1);
 
