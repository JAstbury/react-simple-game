import React, { Component } from 'react';
import SquareGrid from '../containers/square_grid';

export default class App extends Component {
  render() {
    return (
      <SquareGrid squares={9}/>
    );
  }
}
