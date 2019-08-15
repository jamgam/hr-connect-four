import React from 'react';

const Square = props => {
  var player = '';
  player = props.board.board[props.row][props.column];

  const onClick = e => {
    e.preventDefault();
    props.makeMove(props.row, props.column);
  };
  var style = {backgroundColor: 'white'};

  if(player === 'X') {
    style.backgroundColor = 'black'
  } else if (player === 'O') {
    style.backgroundColor = 'red'
  }

  return(
    <div 
      style={style}
      onClick={onClick}
      className="square"></div>
  )
}

export default Square;