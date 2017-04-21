export function selectSquare(squares, isActive) {
  return {
    type: 'SQUARE_SELECTED',
    payload: squares,
    active: isActive
  };
}

export function selectMode(mode) {
  return {
    type: 'MODE_SELECTED',
    payload: noOfSquares(mode)
  };
}

function noOfSquares(mode) {
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
