import React from 'react';
import { Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Popup = ({
    headline,
    buttonColor,
    buttonText,
    onClick,
}) => {
    const theme = useTheme();

    return (
        <div className="overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>
            <div className="popup" style={{ backgroundColor: theme.palette.white, border: '2px solid #ccc', padding: '20px', textAlign: 'center', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', borderRadius: '10%' }}>
                <Typography variant="h5" gutterBottom style={{ marginBottom: '30px'}}>
                    {headline}
                </Typography>
                <Button variant="contained" style={{ backgroundColor: buttonColor }} onClick={onClick}>
                    {buttonText}
                </Button>
                
            </div>
        </div>
    );
};

export default Popup;
