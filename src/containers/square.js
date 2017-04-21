import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectSquare } from '../actions/index';
import { bindActionCreators } from 'redux';

class Square extends Component {
  renderSquare() {
    return (
        <div className="square-content">
          {this.props.number}
        </div>
    )
  }

  getColour() {
    var colors = ['blue', 'green', 'yellow', 'red', 'purple'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  render() {
    if (this.props.active == true) {
      return (
        <div className={'square ' + this.getColour()} onClick={() => this.props.selectSquare(this.props.squares, true)}>
        {this.renderSquare()}
        </div>
      )
    } else {
      return (
        <div className="square" onClick={() => this.props.selectSquare(this.props.squares, false)}>
        {this.renderSquare()}
        </div>
      )
    }
  }
};

function mapStateToProps(state) {
  return {
    squares: state.squares,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectSquare: selectSquare }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(Square);
