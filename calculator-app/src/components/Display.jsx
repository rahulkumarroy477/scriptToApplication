jsx
import React from 'react';

const Display = ({ displayValue }) => {
  return (
    <div className="display">
      <p>{displayValue}</p>
    </div>
  );
};

export default Display;
