import React, { Component } from 'react';
import Board from '../containers/board';
import Control from '../containers/control';
import Counter from '../containers/counter';


export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Game of Life (React-Redux)</h1>
        <Board />
        <Control />
        <Counter />
      </div>
    );
  }
}
