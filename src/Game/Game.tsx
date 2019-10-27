import React from 'react';
import { Board } from '../Board/Board';
import './Game.scss';

export class Game extends React.Component {
  render() {
    return (
      <div className="Game">
        <Board></Board>
        <h2>Vs</h2>
        <Board></Board>
      </div>
    );
  }
}
