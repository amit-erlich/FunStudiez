import './App.css';
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Button, Typography, Paper, Grid } from '@mui/material';
import Square from './components/Square';
import HeartsBar from './components/HeartsBar';
import CourseDetails from './components/CourseDetails';
import Popup from './components/Popup';
import TimerPopup from './components/TimerPopup';

const handleClick = () => {
  alert('clicked! Lets start')
}

function App() {
  const theme = useTheme();
  const [timerTime, setTimerTime] = useState(0);
  const [showTimerPopup, setShowTimerPopup] = useState(false);
  const [showTimerEndPopup, setShowTimerEndPopup] = useState(false);
  const courseName = 'Complexity';
  const tastDate = '28/01/24';
  const timerButtonColor = timerTime === 15 ? theme.palette.pink : theme.palette.green;

  const set15minTimer = () => {
    setTimerTime(15);
    setShowTimerPopup(true);
  }

  const set30minTimer = () => {
    setTimerTime(30);
    setShowTimerPopup(true);
  }

  const handleTimerEnd = () => {
    setShowTimerPopup(false);
    setShowTimerEndPopup(true);
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
          <HeartsBar text='15 min break' number='3' color={theme.palette.pink} onClick={set15minTimer} />
          <HeartsBar text='30 min break' number='3' color={theme.palette.green} onClick={set30minTimer} />
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
        <Paper>
          <Grid>
            <Square text='Read notebook no.1' color={theme.palette.pink}></Square>
            <Square text='Read notebook no.2' color={theme.palette.pink}></Square>
            <Square text='Solve task no.5' color={theme.palette.blueGreen}></Square>
            <Square text='10 min break' number='2' color={theme.palette.pink} addStar={true}></Square>
            <Square text='5 min break' number='3' color={theme.palette.yellow} addStar={true}></Square>
            <Square text='Read presentation no.13' color={theme.palette.darkBlue}></Square>
            <Square text='Read notebook no.8' color={theme.palette.pink}></Square>
            <Square text='15 min break' number='6' color={theme.palette.green} addStar={true}></Square>
            <Square text='Solve task no.4' color={theme.palette.blueGreen}></Square>
            <Square text='20 min break' number='2' color={theme.palette.darkBlue} addStar={true}></Square>
            <Square text='Read notebook no.7' color={theme.palette.pink}></Square>
            <Square text='Read notebook no.15' color={theme.palette.pink}></Square>
            <Square text='Read marathon no.2' color={theme.palette.green}></Square>
            <Square text='10 min break' number='4' color={theme.palette.blueGreen} addStar={true}></Square>
          </Grid>
        </Paper>
      </header>
    </div>
  );
}

export default App;
