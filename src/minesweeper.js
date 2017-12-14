const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [ ];
  for (let i = 0; i < numberOfRows; i++) {
    let row = [ ]
    for (let j = 0; j < numberOfColumns; j++) {
          row.push( ' ' );
    }  board.push(row);
  }  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [ ];
  for (let i = 0; i < numberOfRows; i++) {
    let row = [ ]
    for (let j = 0; j < numberOfColumns; j++) {
          row.push(null);
    }  board.push(row);

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
  const neighborOffsets = [[-1,-1][-1,0][-1,1][0,-1][1,1][0,1][1,-1][1,0]]
  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;
  numberOfBombs = 0

};











};
let numberOfBombsPlaced = 0;
  while (numberOfBombs > numberOfBombsPlaced) {
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    if (board[randomRowIndex][randomColumnIndex] !== 'b') {
      board[randomRowIndex][randomColumnIndex] = 'B';
      numberOfBombsPlaced++;
    }
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    // An important note: The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.
    board[randomRowIndex][randomColumnIndex] = 'b';

    numberOfBombsPlaced++;
  }
  return board;
};















const printBoard = (board) => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

const playerBoard = generatePlayerBoard(20, 20);
const bombBoard = generateBombBoard(20, 20, 21);


printBoard(playerBoard);
printBoard(bombBoard);
