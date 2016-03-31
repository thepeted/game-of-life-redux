import * as grid from '../bin/grid'

const GRID_HEIGHT = 30;
const GRID_WIDTH = 48;
const initialGrid = grid.makeGrid(GRID_HEIGHT,GRID_WIDTH);

export default (state = initialGrid, action) => {
  switch(action.type){
    case 'TOGGLE_ALIVE':
      let board = state.slice(0);
      let cell = board[action.x][action.y]
      cell.status = !cell.status;
      cell.newBorn = !cell.newBorn;
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
