import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';

const Timer = ({ initialTime, onTimerEnd, color }) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [buttonText, setButtonText] = useState('Start');

  useEffect(() => {
    let timer;

    if (isRunning && time > 0) {
      timer = setTimeout(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      onTimerEnd();
      setIsRunning(false);
    }

    return () => clearTimeout(timer);
  }, [isRunning, time, onTimerEnd]);

  const startTimer = () => {
    setIsRunning(true);
    setButtonText('Stop');
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(initialTime);
  };

  const stopTimer = () => {
    setIsRunning(false);
    setButtonText('Continue');
  };

  return (
    <>
        <p>{`Time remaining: ${Math.floor(time / 60)}:${String(time % 60).padStart(2, '0')}`}</p>
        <Button variant="contained" style={{ backgroundColor: color }} onClick={isRunning ? stopTimer : startTimer}>
            {buttonText}
        </Button>
    </>
  );
};

export default Timer;