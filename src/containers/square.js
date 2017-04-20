import React, { Component } from 'react';

export default class SquareGrid extends Component {
  render() {
    return (
      <div className="square">
        <div className="square-content">
          {this.props.number}
        </div>
      </div>
    );
  }
};
