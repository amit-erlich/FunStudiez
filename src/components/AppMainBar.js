import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Paper } from '@mui/material';
import theme from '../theme';

function AppMainBar() {
    const backgroundColor = theme.palette.yellow;
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setDrawerOpen(open);
    };

    const menuItems = [
        { text: 'Home', onClick: () => console.log('Home clicked') },
        { text: 'New Study', onClick: () => console.log('New Study clicked') },
        { text: 'Previous Studies', onClick: () => console.log('Previous Studies clicked') },
    ];
    
    return (
        <Box sx={{ flexGrow: 1, width: '97%' }}>
            <AppBar position="static" sx={{ backgroundColor: backgroundColor, borderRadius: '0 0 35px 35px' }}>
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between', color: theme.palette.black }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
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
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Paper sx={{ backgroundColor: backgroundColor, width: '250px', height: '100%' }}>
                    <List>
                    {menuItems.map((item, index) => (
                        <ListItem button key={index} onClick={item.onClick}>
                        <ListItemText 
                            primary={item.text}
                            primaryTypographyProps={{ style: { color: theme.palette.black, fontSize: '1.4rem' } }}
                        />
                        </ListItem>
                    ))}
                    </List>
                </Paper>
            </Drawer>
        </Box>
    );
};

export default AppMainBar;