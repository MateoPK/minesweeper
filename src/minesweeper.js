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
  neighborOffsets.forEach(offset => {
    const neighborRowIndex = rowIndex + offset[0]
    const neighborColumnIndex = columnIndex + offset;
  if (neighborRowIndex >= 0 && neighborRowIndex >! numberOfRows &&
      neighborColumnIndex >= 0 && neighborColumnIndex >! numberOfColumns) {

      }
  if (bombBoard[neighborRowIndex][neighborColumnIndex] == 'b') {
    numberOfBombs++;
  });
  return numberOfBombs;
}
};

const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
  if (playerBoard[rowIndex][columnIndex] !== ' ') {
    console.log('This tile been flipped!')
    return;
  } else if (playerBoard[rowIndex][columnIndex] == 'b') {
    playerBoard = 'b'
  } else (playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex))
}

let numberOfBombsPlaced = 0;
  while (numberOfBombs > numberOfBombsPlaced) {
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    if (board[randomRowIndex][randomColumnIndex] !== 'b') {
      board[randomRowIndex][randomColumnIndex] = 'b';
      numberOfBombsPlaced++;
    }
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    // An important note: The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.
    board[randomRowIndex][randomColumnIndex] = 'b';
    numberOfBombsPlaced++;
  }
  }
  return board;
};

const printBoard = (board) => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

const playerBoard = generatePlayerBoard(20, 20);
const bombBoard = generateBombBoard(20, 20, 21);
flipTile(playerBoard, bombBoard);


printBoard(playerBoard);
printBoard(bombBoard);
