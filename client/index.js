import ReactDOM from 'react-dom';
import React from 'react';
import App from './app.jsx';

ReactDOM.render(<App boardSize={{rows:6, columns:10}}/>, document.querySelector('#app'));