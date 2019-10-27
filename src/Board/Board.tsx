import React from 'react';
import { Square } from '../Square/Square';
import './Board.scss';
export interface BoardProps {
  player: any;
}
export function Board(props: BoardProps) {
  const renderSquares = () => {
    return props.player.squares.map(() => {
      return <Square />;
    });
  };
  return <div className="Board">{renderSquares()}</div>;
}
