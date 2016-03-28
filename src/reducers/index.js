import { combineReducers } from 'redux';

import boardReducer from './reducer_board';
import playStatusReducer from './reducer_play_status';
import generationCounterReducer from './reducer_generation_counter';

const rootReducer = combineReducers({
  board: boardReducer,
  playState: playStatusReducer,
  counter: generationCounterReducer,
});

export default rootReducer;
