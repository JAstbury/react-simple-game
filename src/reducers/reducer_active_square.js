export default function(state = 2, action) {
  switch(action.type) {
    case 'SQUARE_SELECTED':
      return Math.floor(Math.random() * 3);
  }
  return state
}
