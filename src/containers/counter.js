import React, { Component } from 'react'
import { connect } from 'react-redux';
import Modes from '../components/modes';

class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <Modes/>
        <h1>Score:</h1>
        <div className="counter-number">
          {this.props.number}
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    number: state.counter
  };
}

export default connect(mapStateToProps)(Counter);
