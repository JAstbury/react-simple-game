import { combineReducers } from 'redux';
import SquaresReducer from './reducer_squares';
import CounterReducer from './reducer_counter';

const rootReducer = combineReducers({
  squares: SquaresReducer,
  counter: CounterReducer,
});

export default rootReducer;
