import './App.css';
import React, { useState } from 'react';
import Square from './components/TaskSquare';
import { Button, Typography, Paper, Grid } from '@mui/material';
import HeartsBar from './components/HeartsBar';

const handleClick = () => {
  alert('clicked! Lets start')
}

// colors: '#d71670', '#f2dc3b', '#16d7ad'
function App() {
  const [timerTime, setTimerTime] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const courseName = 'Complexity';
  const tastDate = '28/01/24';

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
        <div className="popup" style={{ backgroundColor: 'white', border: '2px solid #ccc', padding: '20px', textAlign: 'center', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
            <Typography variant="h4" gutterBottom>
              You have {timerTime} min
            </Typography>
            <Button variant="contained" style={{ backgroundColor: 'green', width: "90px", marginRight: '10px' }} onClick={() => setShowPopup(false)}>
              start
            </Button>
        </div>
        </div>
    )}
      <header className="App-header">
        <div style={{ position: 'absolute', top: 0, right: 0, display: 'flex', alignItems: 'flex-start', marginTop: '10px' }}>
          <HeartsBar text='15 min break' number='3' color='#d71670' onClick={set15minTimer} />
          <HeartsBar text='30 min break' number='3' color='#f2dc3b' onClick={set30minTimer} />
        </div>
        <div style={{ position: 'absolute', top: 0, left: '20px', display: 'flex', alignItems: 'flex-start', marginTop: '10px' }}>
          <>
            <p>
              <span style={{ fontWeight: 'bold' }}>Course:</span> {courseName}
              <br />
              <span style={{ fontWeight: 'bold' }}>Test Date:</span> {tastDate}
            </p>
          </>
        </div>
        <p>
          Welcome to Fun Studiez!
        </p>
        <Button variant='contained' color='primary' onClick={handleClick}>
          start
        </Button>
        <Paper>
          {/* <Grid>
            <HeartsBar text='15 min break' number='3' color='#d71670'></HeartsBar>
            <HeartsBar text='30 min break' number='3' color='#f2dc3b'></HeartsBar>
          </Grid> */}
          <Grid>
            <Square text='Read notebook no.1' number='15' color='#d71670'></Square>
            <Square text='Read notebook no.2' number='15' color='#f2dc3b'></Square>
            <Square text='Solve task no.5' number='3' color='#16d7ad'></Square>
            <Square text='10 min break' number='2' color='#d71670' addStar={true}></Square>
            <Square text='5 min break' number='3' color='#16d7ad' addStar={true}></Square>
          </Grid>
        </Paper>
      </header>
    </div>
  );
}

export default App;
