import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Typography, Paper, Grid } from '@mui/material';
import Heart from './Heart';

const HeartsBar = ({
    text,
    number,
    color
}) => {
  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(true);
  };

  return (
    <>
    <Typography style={{ 
        fontSize: '22px',
        fontStyle: 'bold',
        fontFamily: 'cursive',
        }}>
            {text}
    </Typography>
    <Paper elevation={3} style={{ 
        padding: '10px',
        border: `5px solid ${color}`,
        borderRadius: '20px',
        backgroundColor: `${color}66`,
        }}>
        
        <Grid container spacing={0} justifyContent="center">
            <Grid item xs={4}>
                <Heart number='1' color={color}></Heart>
            </Grid>
            <Grid item xs={4}>
                <Heart number='2' color={color}></Heart>
            </Grid>
            <Grid item xs={4}>
                <Heart number='3' color={color}></Heart>
            </Grid>
        </Grid>
    </Paper>
    </>
  );
};

export default HeartsBar;
