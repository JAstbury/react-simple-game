export default function(state = 3, action) {
  switch(action.type) {
    case 'MODE_SELECTED':
      return action.payload;
  }
  return state;
}
