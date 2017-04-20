import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectSquare } from '../actions/index';
import { bindActionCreators } from 'redux';

class SquareGrid extends Component {
  render() {
    return (
      <div className="square" onClick={() => this.props.selectSquare()}>
        <div className="square-content">
          {this.props.number}
        </div>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectSquare: selectSquare }, dispatch )
}

export default connect(null, mapDispatchToProps)(SquareGrid);
