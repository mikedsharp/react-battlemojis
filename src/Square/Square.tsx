import React from 'react';
import './Square.scss';

export class SquareProps {
  foo: string = '';
}
export const Square: React.FC = () => {
  return (
    <div className="Square">
      <span>🤪</span>
    </div>
  );
};
export default Square;
