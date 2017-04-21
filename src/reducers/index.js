import { combineReducers } from 'redux';
import SquaresReducer from './reducer_squares';
import CounterReducer from './reducer_counter';
import ActiveSquareReducer from './reducer_active_square';

const rootReducer = combineReducers({
  squares: SquaresReducer,
  activeSquare: ActiveSquareReducer,
  counter: CounterReducer,
});

export default rootReducer;
