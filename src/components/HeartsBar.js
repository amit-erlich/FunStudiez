import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Typography, Paper, Grid, Container } from '@mui/material';
import Heart from './Heart';

const HeartsBar = ({
    text,
    number,
    color,
    onClick
}) => {
    const hearts = [];
    const [clickableIndex, setClickableIndex] = useState(1);

    const handleHeartClick = (clickedIndex) => {
        if (clickedIndex === clickableIndex) {
            setClickableIndex(clickableIndex + 1);
            onClick();
        }
    };

    for (let i = 1; i <= number; i++) {
        hearts.push(
        <Grid item xs={4} key={i}>
            <Heart 
                number={i} 
                color={color}
                clickable={i <= clickableIndex}
                onClick={() => handleHeartClick(i)}
            />
        </Grid>
        );
    }

    return (
        <>
            <Container>
                <Typography style={{ 
                    fontSize: '22px',
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
                        {hearts}
                    </Grid>
                </Paper>
            </Container>
        </>
    );
};

export default HeartsBar;
