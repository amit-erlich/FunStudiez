import './App.css';
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Button, Typography, Paper, Grid } from '@mui/material';
import Square from './components/Square';
import HeartsBar from './components/HeartsBar';
import CourseDetails from './components/CourseDetails';
import Popup from './components/Popup';
import TimerPopup from './components/TimerPopup';
import StarSquare from './components/StarSquare';
import TaskSquare from './components/TaskSquare';

const handleClick = () => {
  alert('clicked! Lets start')
}

function App() {
  const theme = useTheme();
  const [timerTime, setTimerTime] = useState(0);
  const [timerButtonColor, setTimerButtonColor] = useState(theme.palette.black);
  const [showTimerPopup, setShowTimerPopup] = useState(false);
  const [showTimerEndPopup, setShowTimerEndPopup] = useState(false);
  const courseName = 'Complexity';
  const tastDate = '28/01/24';

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
          <HeartsBar text='15 min break' number='3' color={theme.palette.pink} onClick={() => setTimerPopup(15, theme.palette.pink)} />
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
        <Paper>
          <Grid style={{padding:'10px'}}>
            <TaskSquare taskType='R' taskNumber='task1' number='1'/>
            <TaskSquare taskType='R' taskNumber='task3' number='3'/>
            <TaskSquare taskType='S' taskNumber='task1' number='5'/>
            <StarSquare color={theme.palette.lightPurple} number='2' breakTime='10' onClick={handleStarSquareClicked} />
            <StarSquare color={theme.palette.yellow} number='3' breakTime='5' onClick={handleStarSquareClicked} />
            <TaskSquare taskType='R' taskNumber='task5' number='13'/>
            <TaskSquare taskType='R' taskNumber='task4' number='8'/>
            <TaskSquare taskType='R' taskNumber='task2' number='18'/>
            <StarSquare color={theme.palette.green} number='6' breakTime='15' onClick={handleStarSquareClicked} />
            <TaskSquare taskType='S' taskNumber='task3' number='4'/>
            <StarSquare color={theme.palette.blueGreen} number='2' breakTime='20' onClick={handleStarSquareClicked} />
            <TaskSquare taskType='R' taskNumber='task1' number='7'/>
            <TaskSquare taskType='S' taskNumber='task2' number='2'/>
            <StarSquare color={theme.palette.blueGreen} number='4' breakTime='10' onClick={handleStarSquareClicked} />
          </Grid>
        </Paper>
      </header>
    </div>
  );
}

export default App;
