import React from 'react';
import { Square } from '../Square/Square';
import './Board.scss';
export function Board(props: any) {
  const renderSquares = () => {
    if (props.player && props.player.squares && props.player.squares.length) {
      return props.player.squares.map(() => {
        return <Square />;
      });
    }
  };
  return <div className="Board">{renderSquares()}</div>;
}
