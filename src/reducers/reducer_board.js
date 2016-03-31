import * as grid from '../bin/grid'

const GRID_HEIGHT = 30;
const GRID_WIDTH = 48;
const initialGrid = grid.makeGrid(GRID_HEIGHT,GRID_WIDTH);

export default (state = initialGrid, action) => {
  switch(action.type){
    case 'TOGGLE_ALIVE':
      let board = state.slice(0);
      board[action.x][action.y].status = !(board[action.x][action.y].status);
      return board;
    case 'MAKE_RANDOM':
      //true param toggles a random grid
      return grid.makeGrid(GRID_HEIGHT, GRID_WIDTH, true);
    case 'CLEAR':
      return grid.makeGrid(GRID_HEIGHT,GRID_WIDTH);
    case 'TICK':
      return grid.advanceGrid(state.slice(0));
    default:
      return state;
  }
}
