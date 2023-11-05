import React from 'react';
import Popup from './Popup';
import Timer from './Timer';
import theme from '../theme';

const TimerPopup = ({ initialTime, onTimerEnd, color, closePopup }) => {
  return (
    <Popup 
      headline={<Timer initialTime={initialTime} onTimerEnd={onTimerEnd} color={color} />}
      buttonColor={theme.palette.black}
      buttonText="Close"
      onClick={closePopup}
    />
  );
};

export default TimerPopup;