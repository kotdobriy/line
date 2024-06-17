import React from 'react';

interface LineProps {
  angle: number;
}

const Line: React.FC<LineProps> = ({ angle }) => {
  const length = 100;
  const radianAngle = (angle * Math.PI) / 180;
  const x2 = length * Math.cos(radianAngle);
  const y2 = length * Math.sin(radianAngle);

  return (
    <svg height="200" width="200" style={{ backgroundColor: 'black' }}>
      <line
        x1="100"
        y1="100"
        x2={100 + x2}
        y2={100 - y2}
        style={{ stroke: 'white', strokeWidth: 2 }}
      />
    </svg>
  );
};

export default Line;
