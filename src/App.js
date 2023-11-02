import './App.css';
import Square from './components/TaskSquare';
import { Button, Paper, Grid } from '@mui/material';
import HeartsBar from './components/HeartsBar';

const handleClick = () => {
  alert('clicked! Lets start')
}
// colors: '#d71670', '#f2dc3b', '#16d7ad'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Fun Studiez!
        </p>
        <Button variant='contained' color='primary' onClick={handleClick}>
          start
        </Button>
        <Square text='Read notebook no.1' number='15' color='#d71670'></Square>
        <Square text='Read notebook no.2' number='15' color='#f2dc3b'></Square>
        <Square text='Solve task no.5' number='3' color='#16d7ad'></Square>
        <Square text='10 min break' number='2' color='#d71670' addStar={true}></Square>
        <Square text='5 min break' number='3' color='#16d7ad' addStar={true}></Square>
        <HeartsBar text='15 min break' number='3' color='#d71670'></HeartsBar>
        <HeartsBar text='30 min break' number='3' color='#f2dc3b'></HeartsBar>
      </header>
    </div>
  );
}

export default App;
