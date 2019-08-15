import React from 'react';
import Row from './row.jsx'
import ConnectFour from './connectFour.js';

// const Board = props => {
//   let rows = [];
//   for(let i = 0; i < props.rows; i++) {
//     rows.push(<Row columns={props.columns} />);
//   }

  // return(
  //   <div className="board">
  //     {rows}
  //   </div>
  // )
// }

class Board extends React.Component {
  constructor(props) {4
    super(props)
    let rows = props.boardSize.rows;
    let columns = props.boardSize.columns;
    let board = new ConnectFour(rows, columns);
    this.state = {
      board,
      player: 'X'
    }
    this.makeMove = this.makeMove.bind(this);
  }
  
  makeMove(row, column) {
    let player = this.state.player;
    let moveMade = this.state.board.makeMove(column, this.state.player);
    let moveRow = moveMade[0];
    let moveColumn = moveMade[1];

    if(moveMade) {
      if(player === 'X') {
        player = 'O'
      } else {
        player = 'X'
      }
      // console.log('major: ', this.state.board.isWinningMajorDiag(moveMade[0], moveMade[1]));
      // console.log('minor: ', this.state.board.isWinningMinorDiag(moveMade[0], moveMade[1]));
      // console.log('colum: ', this.state.board.isWinningColumn(moveMade[1]));
      // console.log('row: ', this.state.board.isWinningRow(moveMade[0]));
      console.log(this.state.board.isWinningMove(moveRow, moveColumn));
    };


    this.setState({
      board: this.state.board,
      player
    });
  }



  render() {
    let rows = [];
    for(let i = 0; i < this.state.board.rows; i++) {
      rows.push(<Row 
        board={this.state.board}
        makeMove={this.makeMove}
        key={i} 
        row={i} 
        columns={this.state.board.columns} 
      />);
    }

    return(
      <div className="board">
        {rows}
        <div>It is {this.state.player}'s turn!'</div>
      </div>
    )
  }
}

export default Board;