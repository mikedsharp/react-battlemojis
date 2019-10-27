import React from 'react';
import { Board } from '../Board/Board';
import './Game.scss';

export class Game extends React.Component {
  state: any;
  constructor(props: any) {
    super(props);
    let state: any = {
      playerOne: {
        squares: this.buildGrid()
      },
      playerTwo: {
        squares: this.buildGrid()
      }
    };
    this.state = state;
  }
  buildGrid(): any {
    let grid: any = [];
    for (let i = 0; i < 100; i++) {
      grid.push({ foo: '' });
    }
    return grid;
  }

  render() {
    return (
      <div className="Game">
        <Board player={this.state.playerOne}></Board>
        <h2>Vs</h2>
        <Board player={this.state.playerTwo}></Board>
      </div>
    );
  }
}
