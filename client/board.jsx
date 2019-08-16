import React from 'react';
import Row from './row.jsx'
import ConnectFour from './connectFour.js';

class Board extends React.Component {
  constructor(props) {4
    super(props)
    let rows = props.boardSize.rows;
    let columns = props.boardSize.columns;
    let board = new ConnectFour(rows, columns);
    this.state = {
      board,
      player: 'X',
    }
    let message = `It is ${this.state.player}'s turn!`
    this.state.message = message;
    this.makeMove = this.makeMove.bind(this);
    this.changeMessage = this.changeMessage.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  newGame() {
    let rows = this.props.boardSize.rows;
    let columns = this.props.boardSize.columns;
    let newBoard = new ConnectFour(rows, columns)
    this.setState({
      board: newBoard
    })
  }
  
  makeMove(row, column) {
    let player = this.state.player;
    let moveMade = this.state.board.makeMove(column, this.state.player);
    
    if(moveMade) {
      let moveRow = moveMade[0];
      let moveColumn = moveMade[1];
      if (this.state.board.isWinningMove(moveRow, moveColumn)) {
        let color;
        if(player === 'O') {
          color = 'RED'
        } else {
          color = 'BLACK'
        }
        this.setState({
          board: this.state.board,
          player
        });

        setTimeout(()=>{
          alert(`${color} player has WON!`)
          this.newGame();
        }, 0);
      };
      if(player === 'X') {
        player = 'O'
      } else {
        player = 'X'
      }
    };

    this.setState({
      board: this.state.board,
      player
    });

    this.changeMessage(`It is ${player}'s Turn!`);
  }

  changeMessage(message) {
    this.setState({
      message
    })
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
        <button 
          onClick={this.newGame}
          className="reset">Reset</button>
      </div>
    )
  }
}

export default Board;