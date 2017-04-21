import rootReducer from './index';

export default function(state = 3, action) {
  switch(action.type) {
    case 'SQUARE_SELECTED':
        return Math.floor(Math.random() * action.payload);
  }
  return state
}
