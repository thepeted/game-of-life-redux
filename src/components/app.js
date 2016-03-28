import React, { Component } from 'react';
import Board from '../containers/board';
import Control from '../containers/control';
import Counter from '../containers/counter';


export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Conway's Game of Life</h2>
        <Counter />
        <Board/>
        <Control/>
      </div>
    );
  }
}
