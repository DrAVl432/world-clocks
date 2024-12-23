// src/components/ClockForm.jsx

import React, { useState } from 'react';

const ClockForm = ({ onAddClock }) => {
  const [name, setName] = useState('');
  const [timezone, setTimezone] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddClock(name, parseFloat(timezone));
    setName('');
    setTimezone(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='zona'>
      <label htmlFor="Name-zona">Город</label>
      <input
        type="text"
        placeholder="Название"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      </div>
      <div className='UTC'>
      <label htmlFor="Name-zona">Временная зона</label>
      <input
        type="number"
        placeholder="Смещение UTC"
        value={timezone}
        onChange={(e) => setTimezone(e.target.value)}
        required
      />
      </div>
      <button type="submit">Добавить часы</button>
    </form>
  );
};

export default ClockForm;