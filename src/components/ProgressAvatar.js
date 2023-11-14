import React, { useState } from 'react';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import { Typography, IconButton, Popover, Stepper, Step, StepLabel, StepConnector } from '@mui/material';

import ManRoundedIcon from '@mui/icons-material/ManRounded'; // ?
import AssistWalkerRoundedIcon from '@mui/icons-material/AssistWalkerRounded';
import ElderlyRoundedIcon from '@mui/icons-material/ElderlyRounded';
import HikingRoundedIcon from '@mui/icons-material/HikingRounded'; // ?
import DirectionsWalkRoundedIcon from '@mui/icons-material/DirectionsWalkRounded';
import DirectionsRunRoundedIcon from '@mui/icons-material/DirectionsRunRounded';
import SkateboardingRoundedIcon from '@mui/icons-material/SkateboardingRounded'; // ?
import PoolRoundedIcon from '@mui/icons-material/PoolRounded';
import KayakingRoundedIcon from '@mui/icons-material/KayakingRounded';
import SurfingRoundedIcon from '@mui/icons-material/SurfingRounded'; // ?
import KitesurfingRoundedIcon from '@mui/icons-material/KitesurfingRounded';
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded';
import AirplanemodeActiveRoundedIcon from '@mui/icons-material/AirplanemodeActiveRounded'; // ?
import FlightRoundedIcon from '@mui/icons-material/FlightRounded'; // ?
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import SportsScoreRoundedIcon from '@mui/icons-material/SportsScoreRounded';

// import { AssistWalkerRoundedIcon,
//   ElderlyRoundedIcon,
//   DirectionsWalkRoundedIcon,
//   DirectionsRunRoundedIcon,
//   PoolRoundedIcon,
//   KayakingRoundedIcon,
//   KitesurfingRoundedIcon,
//   FlightTakeoffRoundedIcon,
//   RocketLaunchRoundedIcon,
//   SportsScoreRoundedIcon,
// } from '@mui/icons-material';

const CustomButton = styled(IconButton)(({ borderColor }) => ({
    width: '90px',
    height: '90px',
    fontSize: '22px',
    color: 'black',
    overflow: 'hidden',
    fontWeight: 'bold',
    fontFamily: 'cursive',
    textTransform: 'none',
    lineHeight: '1.2',
    borderRadius: '50%',
    borderWidth: '5px',
    borderColor: borderColor,
    opacity: 1,
    '&:hover': {
      borderWidth: '5px',
      borderColor: borderColor,
      opacity: 0.7,
    },
  }));

  const progressIcons  = [
    AssistWalkerRoundedIcon,
    ElderlyRoundedIcon,
    DirectionsWalkRoundedIcon,
    DirectionsRunRoundedIcon,
    PoolRoundedIcon,
    KayakingRoundedIcon,
    KitesurfingRoundedIcon,
    FlightTakeoffRoundedIcon,
    RocketLaunchRoundedIcon,
    SportsScoreRoundedIcon,
  ];
  
  const ProgressAvatar = ({ index, wholeNumber }) => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleButtonClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClosePopover = () => {
      setAnchorEl(null);
    };

    const CurrentIcon = progressIcons[index];
    const isOpen = Boolean(anchorEl);
    
    const tenPercent = Math.ceil((wholeNumber - 1) / 9);
    console.log(`tenPercent = ${tenPercent}`);
    console.log(`wholeNumber = ${wholeNumber}`);
  
    return (
      <>
        <CustomButton
          variant="outlined"
          borderColor={theme.palette['gray']}
          onClick={handleButtonClick}
        >
            <CurrentIcon style={{ color: theme.palette['gray'], fontSize: '70px' }} />
        </CustomButton>
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
              marginTop: '16px',
              color: theme.palette['green']
            }}
          >
            Progress Bar
          </Typography>
          <div style={{ padding: '16px', position: 'relative' }}>
            <Stepper alternativeLabel activeStep={index} connector={<StepConnector style={{ display: 'none' }} />} nonLinear>
              {progressIcons.map((Icon, i) => (
                <Step key={i}>
                  <StepLabel
                    icon={
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                        }}
                      >
                        <Icon style={{ color: i <= index ? theme.palette['green'] : theme.palette['gray'], fontSize: '44px' }} />
                        <Typography
                          variant="body2"
                          style={{
                            textAlign: 'center',
                            marginTop: '4px',
                          }}
                        >
                          {i === 9 ? '100%' : Math.floor(((tenPercent * i + 1) / wholeNumber) * 100) + '%'}
                        </Typography>
                      </div>
                    }
                  />
                </Step>
              ))}
            </Stepper>
          </div>
        </Popover>
      </>
    );
  };

  export default ProgressAvatar;