import React, { Component } from 'react';
import Square from './square';
import _ from 'lodash';

export default class SquareGrid extends Component {
  renderSquares() {
    var squares = [];
    for (var i = 0; i < this.props.squares; i++) {
      squares.push(<Square number={i} key={i}/>);
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
