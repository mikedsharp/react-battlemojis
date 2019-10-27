import React from 'react';
import './Square.scss';

export interface SquareProps {}
export const Square: React.FunctionComponent<SquareProps> = () => {
  return (
    <div className="Square">
      <span>🤪</span>
    </div>
  );
};
export default Square;
