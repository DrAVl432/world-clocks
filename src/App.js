// src/App.jsx

import React, { useState } from 'react';
import Clock from './components/Clock';
import ClockForm from './components/ClockForm';

const App = () => {
  const [clocks, setClocks] = useState([]);

  const addClock = (name, utcOffset) => {
    setClocks([...clocks, { name, utcOffset }]);
  };

  const deleteClock = (index) => {
    setClocks(clocks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Мировые часы</h1>
      <ClockForm onAddClock={addClock} />
      <div className='blok'>
      {clocks.map((clock, index) => (
        
        <Clock
          key={index}
          name={clock.name}
          utcOffset={clock.utcOffset}
          onDelete={() => deleteClock(index)}
        />

      ))}
      </div>
    </div>
  );
};

export default App;