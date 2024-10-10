const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

const displayBoard = (board) => {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

const initializeBoard = () => {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

const emptySquares = (board) => {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

const boardFull = (board) => emptySquares(board).length === 0;

const someoneWon = (board) => !!detectWinner(board);

const playerChoosesSquare = (board) => {
  let square;

  while (true) {
    square = readline.question(`Choose a square (${emptySquares(board).join(', ')}): `).trim(); // input trimmed to allow spaces in input
    if (emptySquares(board).includes(square)) break; // break if it's a valid square
    
    console.log("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

const computerChoosesSquare = (board) => {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

const detectWinner = (board) => {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

while (true) {
  let board = initializeBoard();

  while (true) {
    displayBoard(board);
  
    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  
    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

if (someoneWon(board)) {
  console.log(`${detectWinner(board)} won!`);
} else {
  console.log("It's a tie!");
}

let answer = readline.question('Play again? (y or n) ').toLowerCase()[0];
if (answer !== 'y') break;

}

console.log('Thanks for playing Tic Tac Toe!');





