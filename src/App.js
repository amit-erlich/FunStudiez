import './App.css';
import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Button, Typography, Paper, Grid, Avatar } from '@mui/material';
import HeartsBar from './components/HeartsBar';
import CourseDetails from './components/CourseDetails';
import Popup from './components/Popup';
import TimerPopup from './components/TimerPopup';
import SquaresPanel from './components/SquaresPanel';
import ProgressAvatar from './components/ProgressAvatar';

function App() {
  const theme = useTheme();
  const [timerTime, setTimerTime] = useState(0);
  const [timerButtonColor, setTimerButtonColor] = useState(theme.palette.black);
  const [showTimerPopup, setShowTimerPopup] = useState(false);
  const [showTimerEndPopup, setShowTimerEndPopup] = useState(false);
  const [uncoloredSquareNumber, setUncoloredSquareNumber] = useState(1);
  const [squareNumber, setSquareNumber] = useState(-1);
  const [progressIndex, setProgressIndex] = useState(0);
  const courseName = 'Complexity';
  const tastDate = '28/01/24';

  const handleClick = () => {
    alert(`clicked! Lets start`);
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

  const updateUncoloredSquareNumber = (newSquareNumber) => {
    setUncoloredSquareNumber(newSquareNumber);

    if (squareNumber === -1) {
      setSquareNumber(newSquareNumber);
    }
  };

  const increaseOrDecreaseSquareNumber = (toIncrease) => {
    setUncoloredSquareNumber(prevSquareNumber => prevSquareNumber + (toIncrease ? 1 : -1));
  };
  
  useEffect(() => {
    if (uncoloredSquareNumber === 0) {
      alert("done!");
      // showPopup
    }
    updateProgressIndex();
  }, [uncoloredSquareNumber]);
  
  const updateProgressIndex = () => {
    const tenOfSquareNumber = Math.ceil((squareNumber - 1) / 9);

    if (squareNumber - uncoloredSquareNumber === tenOfSquareNumber * progressIndex + 1) {
      setProgressIndex((prevIndex) => ((prevIndex < 8) ? prevIndex + 1 : prevIndex));
    } else if (uncoloredSquareNumber === 0) {
      setProgressIndex((prevIndex) => (prevIndex + 1));
    } 
  };

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
        <ProgressAvatar index={progressIndex} />
        <SquaresPanel updateSquareNumber={updateUncoloredSquareNumber} onClickSquare={increaseOrDecreaseSquareNumber} onClickStarSquare={handleStarSquareClicked} />
      </header>
    </div>
  );
}

export default App;
