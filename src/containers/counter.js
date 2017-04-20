import React, { Component } from 'react'
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <div className="counter">
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
