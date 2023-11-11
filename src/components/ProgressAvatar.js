import React, { useState } from 'react';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import { Typography, IconButton } from '@mui/material';

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
    width: '50px',
    height: '50px',
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
  
  const ProgressAvatar = ({ index }) => {
    const theme = useTheme();
  
    const handleButtonClick = () => {
      //updateProgressIndex();
    };

    const CurrentIcon = progressIcons[index];
  
    return (
      <CustomButton
        variant="outlined"
        borderColor={theme.palette['black']}
        //onClick={handleButtonClick}
      >
          <CurrentIcon style={{ color: theme.palette['black'], fontSize: '45px' }} />
      </CustomButton>
    );
  };
  
  export default ProgressAvatar;