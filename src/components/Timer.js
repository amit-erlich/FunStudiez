import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime, onTimerEnd }) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning && time > 0) {
      timer = setTimeout(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      onTimerEnd(); // Call the function when the timer reaches 0
      setIsRunning(false);
    }

    return () => clearTimeout(timer);
  }, [isRunning, time, onTimerEnd]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(initialTime);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  return (
    <div>
      <p>Time remaining: {time} seconds</p>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={resetTimer}>Reset Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
};

export default Timer;
