import React from 'react';
import { useTheme } from '@mui/material/styles';

function Home() {
  const theme = useTheme();
  
  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: theme.palette.yellow}}>
        <p>
            <p style={{ fontSize: '110%', marginLeft: '-290px' }}>
            welcome to
            </p>
            <p style={{ fontSize: '300%', fontWeight: 'bold', marginTop: '-40px' }}>
            FunStudiezzz
            </p>
        </p>
      </header>
    </div>
  );
}

export default Home;
