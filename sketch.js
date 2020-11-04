function setup() {
  createCanvas(400, 400);
}

function display(board) {
  size = width/board.length;
  noStroke();
  for(i = 0; i < board.length; i++) {
    for(j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) {
        fill(0);
      } else {
        fill(255);
      }
      rect(size*i, size*j, size, size);
    }
  }
}

function genBoard(size) {
  board = []
  for(i = 0; i < size; i++) {
    newLine = []
    for(j = 0; j < size; j++) {
      newLine.push(0);
    }
    board.push(newLine);
  }
  return board
}

function updateBoard(board) {
  for(i = 0; i < board.length; i++) {
    for(j = 0; j < board.length; j++) {
      if (findNeighbours(i, j, board) === 3) {
        board[i][j] = 1;
      }
      if (findNeighbours(i, j, board) === 1) {
        board[i][j] = 0;
      }
      
    }
  }
  
  return board;
}

function findNeighbours(x, y, board) {
  var neighbourNum = 0;
  for(i = -1; i < 2; i++) {
    try {
      if (board[x-1][y+i] === 1) {
        neighbourNum++;
      }
      if (board[x+1][y+i] === 1) {
        neighbourNum++;
      }
    }
    catch(err) {
      neighbourNum += 0;
    }
    
    try {
      if (board[x][y-1] === 1 || board[x][y+1] === 1) {
        neighbourNum++;
      }
    }
    catch(err) {
      neighbourNum += 0;
    }
  }
  return neighbourNum;
}

board = genBoard(30);
board[1][10] = 1;

function draw() {
  background(255,255,255);
  print(board);
  display(board);
  board = updateBoard(board);
  print(board);
  display(board);
}

