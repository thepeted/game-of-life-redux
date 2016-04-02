import * as grid from '../bin/grid';

const GRID_HEIGHT = 25;
const GRID_WIDTH = 40;
const initialGrid = grid.makeGrid(GRID_HEIGHT,GRID_WIDTH);

export default (state = initialGrid, action) => {
  switch(action.type){
    case 'TOGGLE_ALIVE':
      let board = state.slice(0);
      let cell = board[action.x][action.y];
      cell.status = !cell.status;
      cell.newBorn = !cell.newBorn;
      return board;
    case 'MAKE_RANDOM':
      //true param requests a random grid from makeGrid method
      return grid.makeGrid(GRID_HEIGHT, GRID_WIDTH, true);
    case 'CLEAR':
      return grid.makeGrid(GRID_HEIGHT,GRID_WIDTH);
    case 'TICK':
      return grid.advanceGrid(state.slice(0));
    default:
      return state;
  }
};
