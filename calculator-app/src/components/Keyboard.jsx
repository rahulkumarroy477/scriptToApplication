jsx
import React from 'react';

const Keyboard = ({ handleButtonClick }) => {
  const buttons = [
    'C',
    '7',
    '8',
    '9',
    '/',
    '4',
    '5',
    '6',
    '*',
    '1',
    '2',
    '3',
    '-',
    '0',
    '.',
    '=',
    '+',
  ];

  return (
    <div className="keyboard">
      {buttons.map((button) => (
        <button
          key={button}
          className={button ${button === '=' ? 'equals' : ''}}
          onClick={() => handleButtonClick(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;

