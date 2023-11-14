import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import theme from '../theme';
//theme.palette.black
export default function AppMainBar() {
  return (
    <Box sx={{ flexGrow: 1, width: '97%' }}>
        <AppBar position="static" sx={{ backgroundColor: theme.palette.yellow, borderRadius: '0 0 35px 35px' }}>
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between', color: theme.palette.black }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon style={{ fontSize: '2rem' }}/>
                    </IconButton>
                    <Typography variant="h4" component="div" fontWeight='bold'>
                        FunStudiezzz
                    </Typography>
                </div>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                >
                    <HelpRoundedIcon style={{ fontSize: '2rem' }}/>
                </IconButton>
            </Toolbar>
        </AppBar>
    </Box>
  );
}