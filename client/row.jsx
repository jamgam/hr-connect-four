import React from 'react'
import Square from './square.jsx';

const Row = props => {
  let row = [];
  for(let i = 0; i < props.columns; i++) {
    row.push(<Square 
      board={props.board}
      makeMove={props.makeMove}
      key={i} 
      row={props.row} 
      column={i} 
    />);
  }

  return (
    <div className="row">
      {row}
    </div>
  )
}

export default Row;