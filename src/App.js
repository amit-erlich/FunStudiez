import './App.css';
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Square from './components/TaskSquare';
import HeartsBar from './components/HeartsBar';
import CourseDetails from './components/CourseDetails';
import { Button, Typography, Paper, Grid } from '@mui/material';

const handleClick = () => {
  alert('clicked! Lets start')
}

function App() {
  const theme = useTheme();
  const [timerTime, setTimerTime] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const courseName = 'Complexity';
  const tastDate = '28/01/24';
  const timerButtonColor = timerTime === 15 ? theme.palette.pink : theme.palette.green;

  const set15minTimer = () => {
    setTimerTime(15);
    setShowPopup(true);
  }

  const set30minTimer = () => {
    setTimerTime(30);
    setShowPopup(true);
  }

  return (
    <div className="App">
      {showPopup && (
        <div className="overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>
        <div className="popup" style={{ backgroundColor: theme.palette.white, border: '2px solid #ccc', padding: '20px', textAlign: 'center', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
            <Typography variant="h4" gutterBottom>
              You have {timerTime} min
            </Typography>
            <Button variant="contained" style={{ backgroundColor: timerButtonColor, width: "90px", marginRight: '10px' }} onClick={() => setShowPopup(false)}>
              start
            </Button>
        </div>
        </div>
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
