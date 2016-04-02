import React, { Component } from 'react';
import Board from '../containers/board';
import Control from '../containers/control';
import Counter from '../containers/counter';
import GitHubForkRibbon from 'react-github-fork-ribbon';


export default () => (
  <div>
    <h1>Game of Life (React-Redux)</h1>
    <Board />
    <Control />
    <Counter />
    <GitHubForkRibbon
      href='https://github.com/thepeted/game-of-life-redux'
      target='_blank'
      position='right'
      color='orange'
      >
      Fork me on GitHub
    </GitHubForkRibbon>
  </div>
)
