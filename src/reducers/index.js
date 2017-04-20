import { combineReducers } from 'redux';
import SquaresReducer from './reducer_squares';

const rootReducer = combineReducers({
  squares: SquaresReducer,
});

export default rootReducer;
