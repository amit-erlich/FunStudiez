import './App.css';
import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Button, Typography, Paper, Grid } from '@mui/material';
import HeartsBar from './components/HeartsBar';
import CourseDetails from './components/CourseDetails';
import Popup from './components/Popup';
import TimerPopup from './components/TimerPopup';
import SquaresPanel from './components/SquaresPanel';

function App() {
  const theme = useTheme();
  const [timerTime, setTimerTime] = useState(0);
  const [timerButtonColor, setTimerButtonColor] = useState(theme.palette.black);
  const [showTimerPopup, setShowTimerPopup] = useState(false);
  const [showTimerEndPopup, setShowTimerEndPopup] = useState(false);
  const [squareNumber, setSquareNumber] = useState(1);
  const courseName = 'Complexity';
  const tastDate = '28/01/24';

  const handleClick = () => {
    alert(`clicked! Lets start ${squareNumber}`);
  }

  const setTimerPopup = (time, color) => {
    setTimerTime(time);
    setTimerButtonColor(color)
    setShowTimerPopup(true);
  }

  const handleStarSquareClicked = (time, color) => {
    // TO-DO: check if can mark star
    setTimerPopup(time, color);
  }

  const handleTimerEnd = () => {
    setShowTimerPopup(false);
    setShowTimerEndPopup(true);
  };

  const updateSquareNumber = (newSquareNumber) => {
    setSquareNumber(newSquareNumber);
  };

  // const increaseOrDecreaseSquareNumber = (toDecrease) => {
  //   const newNumber = squareNumber + (toDecrease ? -1 : 1)
  //   setSquareNumber(newNumber);

  //   if (squareNumber == 0) {
  //     alert("done!");
  //   }
  // };

  const increaseOrDecreaseSquareNumber = (toIncrease) => {
    setSquareNumber(prevSquareNumber => prevSquareNumber + (toIncrease ? 1 : -1));
  };
  
  useEffect(() => {
    // Perform actions that depend on the updated state
    if (squareNumber === 0) {
      alert("done!");
    }
  }, [squareNumber]);

  return (
    <div className="App">
      {showTimerPopup && (
        <TimerPopup initialTime={60*timerTime} onTimerEnd={handleTimerEnd} color={timerButtonColor} closePopup={() => setShowTimerPopup(false)} />
      )}
      {showTimerEndPopup && (
        <Popup headline={`Time's up!`} buttonColor={timerButtonColor} buttonText='Back to work' onClick={() => setShowTimerEndPopup(false)} />
      )}
      <header className="App-header">
        <div style={{ position: 'absolute', top: 0, right: 0, display: 'flex', alignItems: 'flex-start', marginTop: '10px' }}>
          <HeartsBar text='15 min break' number='3' color={theme.palette.red} onClick={() => setTimerPopup(15, theme.palette.pink)} />
          <HeartsBar text='30 min break' number='3' color={theme.palette.green} onClick={() => setTimerPopup(30, theme.palette.green)} />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, display: 'flex', alignItems: 'flex-start', marginLeft: '10px' }}>
          <CourseDetails courseName={courseName} tastDate={tastDate}></CourseDetails>
        </div>
        <p>
          Welcome to Fun Studiez!
        </p>
        <Button variant='contained' style={{ backgroundColor: theme.palette.darkBlue }} onClick={handleClick}>
          start
        </Button>
        <SquaresPanel updateSquareNumber={updateSquareNumber} onClickSquare={increaseOrDecreaseSquareNumber} onClickStarSquare={handleStarSquareClicked} />
      </header>
    </div>
  );
}

export default App;
