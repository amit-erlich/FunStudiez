import './App.css';
import Square from './components/TaskSquare';
import Button from '@mui/material/Button';
import Heart from './components/Heart';

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
        <Heart text='15 min break' number='1' color='#d71670'></Heart>
        <Heart text='15 min break' number='2' color='#d71670'></Heart>
        <Heart text='15 min break' number='3' color='#d71670'></Heart>
      </header>
    </div>
  );
}

export default App;
