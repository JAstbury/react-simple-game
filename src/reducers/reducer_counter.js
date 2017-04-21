export default function(state = 0, action) {
  switch(action.type) {
    case 'SQUARE_SELECTED':
      if (action.active == true) {
        return state + 1;
      }
  }
  return state
}
