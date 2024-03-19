import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Button, Container } from '@mui/material';

function Home() {
  const theme = useTheme();
  
  const navigate = useNavigate();
  const navigateNewStudy = () => {
      navigate('/Study');
  };

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: theme.palette.yellow}}>
        <div>
          <p style={{ textAlign: 'left', fontSize: '110%', padding: '0px', margin: '-15px' }}>
          welcome to
          </p>
          <p style={{ textAlign: 'left', fontSize: '300%', fontWeight: 'bold', padding: '0px', margin: '-15px' }}>
          FunStudiezzz
          </p>
        </div>
        <Container style={{ padding: '2%' }}>
          <Button variant="contained" 
            style={{ 
              backgroundColor: theme.palette.white, 
              color: theme.palette.black,
              fontWeight: 'bold',
              fontSize: '60%',
              fontFamily: 'cursive',
              marginRight: '1%' }}
              onClick={navigateNewStudy}>
              New Study
          </Button>
          <Button variant="contained" 
            style={{ 
              backgroundColor: theme.palette.white, 
              color: theme.palette.black,
              fontWeight: 'bold',
              fontSize: '60%',
              fontFamily: 'cursive',
              marginLeft: '1%' }}>
              Previous Study
          </Button>
        </Container>
      </header>
    </div>
  );
}

export default Home;
