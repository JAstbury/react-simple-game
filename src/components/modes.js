import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMode } from '../actions/index';
import { bindActionCreators } from 'redux';

class Modes extends Component {
  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={() => this.props.selectMode("Easy")}>Easy</button>
        <button type="button" className="btn btn-primary" onClick={() => this.props.selectMode("Medium")}>Medium</button>
        <button type="button" className="btn btn-primary" onClick={() => this.props.selectMode("Hard")}>Hard</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectMode: selectMode }, dispatch )
}

export default connect(null, mapDispatchToProps)(Modes);
