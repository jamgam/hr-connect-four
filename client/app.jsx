import React from 'react';
import ConnectFour from './connectFour.js';
import Board from './board.jsx';


class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <Board 
        boardSize={this.props.boardSize} />
    )
  }
}

export default App;