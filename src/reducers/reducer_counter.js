export default function(state = 0, action) {
  switch(action.type) {
    case 'SQUARE_SELECTED':
      return state + 1;
  }
  return state
}
