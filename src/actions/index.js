export function selectSquare() {
  return {
    type: 'SQUARE_SELECTED'
  };
}


export function selectMode(mode) {
  return {
    type: 'MODE_SELECTED',
    payload: selectSquares(mode)
  };
}

function selectSquares(mode) {
  switch(mode) {
    case "Easy":
        return 3
        break;
    case "Medium":
        return 9
        break;
    case "Hard":
        return 15
        break;
  }
}
