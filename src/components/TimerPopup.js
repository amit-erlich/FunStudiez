import React, { useState, useEffect } from 'react';
import Popup from './Popup';

const TimerPopup = ({ initialTime, onTimerEnd, color, closePopup }) => {
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
      onTimerEnd(); // Call the function when the timer reaches 0
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
    <Popup 
        headline={`Time remaining: ${Math.floor(time/60)}:${String(time % 60).padStart(2, '0')}`} 
        buttonColor={color} 
        button1Text={buttonText} 
        onClick1={(buttonText === 'Stop') ? stopTimer : startTimer}
        button2Text='Close'
        onClick2={closePopup}
    ></Popup>
  );
};

export default TimerPopup;