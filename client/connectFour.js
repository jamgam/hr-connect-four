class ConnectFour {
  constructor(rows = 6, columns = 7, obj) {
    this.numPieces = 0;
    this.rows = rows;
    this.columns = columns;
    this.board = [];
    for(let r = 0; r < rows; r++) {
      let row = [];
      for(let c = 0; c < columns; c++) {
        row.push('');
      }
      this.board.push(row);
    }
  }

  makeMove(column, player) {
    let row = this.rows-1;
    let moveMade = null;
    while(row >= 0) {
      if(this.board[row][column]) {
        row--;
      } else {
        this.board[row][column] = player;
        moveMade = [row, column];
        this.numPieces++;
        break;
      }
    }
    return moveMade;

  }

  isTie() {
    return (this.numPieces === (this.rows * this.columns));
  }

  isWinningMove(row, column) {
    return this.isWinningMajorDiag(row, column) || this.isWinningMinorDiag(row, column) || this.isWinningRow(row) || this.isWinningColumn(column);
  }

  isWinningMajorDiag(r, c) {
    let arr = [];
    let start = {r, c};
    
    while(start.r > 0 && start.c > 0) {
      start.r--;
      start.c--;
    }

    while(start.r < this.rows && start.c < this.columns) {
      arr.push(this.board[start.r][start.c])
      start.r++;
      start.c++;
    }

    return this.isFourInARow(arr);
  }

  isWinningMinorDiag(r, c) {
    let arr = [];
    let start = {r, c};
    while(start.r > 0 && start.c < this.columns - 1) {
      start.r--;
      start.c++;
    }

    while(start.r < this.rows && start.c >= 0) {
      arr.push(this.board[start.r][start.c])
      start.r++;
      start.c--;
    }

    return this.isFourInARow(arr);
  }

  isWinningColumn(c) {
    let res = false;
    let column = [];
    for(let r = 0; r < this.rows; r++) {
      column.push(this.board[r][c])
    }
    return(this.isFourInARow(column));
  }

  isWinningRow(r) {
    let row = this.board[r];
    return(this.isFourInARow(row));

  }

  isFourInARow(array) {
    // console.log(array)
    let inARow = 1;
    let res = false;
    array.forEach((piece, i) => {
      if(array[i-1] === array[i] && array[i]) {
        inARow++;
        if(inARow == 4) {
          res = true;
        }
      } else {
        inARow = 1;
      }
    })
    return res;
  }

}


export default ConnectFour;