// src/components/Clock.jsx

import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Clock = ({ name, utcOffset, onDelete }) => {
  const [time, setTime] = useState(moment.utc().add(utcOffset, 'hours').format('HH:mm:ss'));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(moment.utc().add(utcOffset, 'hours').format('HH:mm:ss'));
    }, 1000);

    return () => clearInterval(timer);
  }, [utcOffset]);

  return (
    <div className='Tik-tak'>
      <h3>{name}</h3>
      <p>{time}</p>
      <button onClick={onDelete}>Удалить</button>
    </div>
  );
};

export default Clock;