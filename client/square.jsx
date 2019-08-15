import React from 'react';

const Square = props => {
  var player = '';
  player = props.board.board[props.row][props.column];

  const onClick = e => {
    e.preventDefault();
    props.makeMove(props.row, props.column);
  };

  return(
    <div 
      onClick={onClick}
      className="square">{player}</div>
  )
}

export default Square;