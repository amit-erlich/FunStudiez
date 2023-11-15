import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Drawer, Paper, List, ListItem, ListItemText } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NoteAddRoundedIcon from '@mui/icons-material/NoteAddRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';

import theme from '../theme';
import HelpButton from './HelpButton';

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
        { icon: <HomeRoundedIcon style={{ fontSize: '2rem', paddingRight: '10px' }}/>, text: 'Home', onClick: () => console.log('Home clicked') },
        { icon: <NoteAddRoundedIcon style={{ fontSize: '2rem', paddingRight: '10px' }}/>, text: 'New Study', onClick: () => console.log('New Study clicked') },
        { icon: <DescriptionRoundedIcon style={{ fontSize: '2rem', paddingRight: '10px' }}/>, text: 'Previous Studies', onClick: () => console.log('Previous Studies clicked') },
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
                    <HelpButton />
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Paper sx={{ backgroundColor: backgroundColor, width: '250px', height: '100%' }}>
                    <List>
                    {menuItems.map((item, index) => (
                        <ListItem button key={index} onClick={item.onClick}>
                            {item.icon}
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