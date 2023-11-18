
import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Timer = () => {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const hours = currentTime.format('HH');
  const minutes = currentTime.format('mm');
  const seconds = currentTime.format('ss');

  return (
    <div>
      
      <p>Time : {hours} : {minutes} : {seconds}</p>
    </div>
  );
};

export default Timer;