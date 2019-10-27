import React from 'react';
import { Square, SquareProps } from '../Square/Square';
import './Board.scss';
export class Board extends React.Component {
  private squares: SquareProps[] = [];
  constructor(props: any) {
    super(props);
    this.buildGrid();
  }
  buildGrid() {
    for (let i = 0; i < 100; i++) {
      this.squares.push({ foo: '' });
    }
  }
  renderSquares() {
    return this.squares.map(square => {
      return <Square />;
    });
  }
  render() {
    return <div className="Board">{this.renderSquares()}</div>;
  }
}
