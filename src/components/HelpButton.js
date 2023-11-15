import React, { useState } from 'react';
import { Typography, IconButton, Popover } from '@mui/material';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';

const HelpButton = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
  
    const handleButtonClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClosePopover = () => {
      setAnchorEl(null);
    };

    return (
        <>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleButtonClick}
            >
                <HelpRoundedIcon style={{ fontSize: '2rem' }}/>
            </IconButton>
            <Popover
                open={isOpen}
                anchorEl={anchorEl}
                onClose={handleClosePopover}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                }}
                >
                <Typography
                    variant="h5"
                    component="h2"
                    style={{
                    textAlign: 'center',
                    margin: '16px',
                    fontWeight: 'bold'
                    }}
                >
                    Help
                </Typography>
                <div style={{margin: '16px'}}>
                    <p>To color the squares - click on the square</p>
                    <p>Coloring a star - click on the square</p>
                    <p>Some text...</p>
                </div>
            </Popover>
        </>
    );
};

export default HelpButton;