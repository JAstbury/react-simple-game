import React, { Component } from 'react';
import SquareGrid from '../containers/square_grid';
import Counter from '../containers/counter';

export default class App extends Component {
  render() {
    return (
      <div className="game">
        <SquareGrid/>
        <Counter/>
      </div>
    );
  }
}
