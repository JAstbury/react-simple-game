import React, { Component } from 'react';
import { connect } from 'react-redux';
import Square from './square';
import _ from 'lodash';

class SquareGrid extends Component {
  renderSquares() {
    var squares = [];
    console.log(this.props.squares);
    for (var i = 0; i < this.props.squares; i++) {
      if (this.props.activeSquare == i) {
        squares.push(<Square number={i} active={true} key={i}/>);
      } else {
        squares.push(<Square number={i} active={false} key={i}/>);
      }
    }
    return squares;
  }

  render() {
    return (
      <div className = "square-grid">
        {this.renderSquares()}
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    squares: state.squares,
    activeSquare: state.activeSquare
  };
}

export default connect(mapStateToProps)(SquareGrid);
