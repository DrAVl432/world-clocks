// src/components/ClockList.jsx

import React from 'react';
import Clock from './Clock';

const ClockList = ({ clocks }) => {
  return (
    <div>
      {clocks.map((timezone, index) => (
        <Clock key={index} timezone={timezone} />
      ))}
    </div>
  );
};

export default ClockList;