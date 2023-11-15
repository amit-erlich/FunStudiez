import React, { useState } from 'react';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import { Typography, IconButton, Popover, Tooltip } from '@mui/material';

import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import FilterHdrRoundedIcon from '@mui/icons-material/FilterHdrRounded';
import HikingRoundedIcon from '@mui/icons-material/HikingRounded';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';
import PlusOneRoundedIcon from '@mui/icons-material/PlusOneRounded';
import BackHandRoundedIcon from '@mui/icons-material/BackHandRounded';
import SignLanguageRoundedIcon from '@mui/icons-material/SignLanguageRounded';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import TransferWithinAStationRoundedIcon from '@mui/icons-material/TransferWithinAStationRounded';
import GolfCourseRoundedIcon from '@mui/icons-material/GolfCourseRounded';

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

  const achievementIcons  = [
    HikingRoundedIcon,
    PlusOneRoundedIcon,
    BackHandRoundedIcon,
    SignLanguageRoundedIcon,
    MilitaryTechRoundedIcon,
    StarsRoundedIcon,
    WorkspacePremiumRoundedIcon,
    FilterHdrRoundedIcon,
    TransferWithinAStationRoundedIcon,
    AutoAwesomeRoundedIcon,
    EmojiEventsRoundedIcon,
    FitnessCenterRoundedIcon,
    AutoGraphRoundedIcon,
    LocalFireDepartmentRoundedIcon,
    GolfCourseRoundedIcon,
    CelebrationRoundedIcon,
  ];
  
  const Achievements = ({ currentColoredSquares, squareNumber }) => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    
    const achievementItems = [
        { condition: currentColoredSquares >= 0, text: 'starting' },
        { condition: currentColoredSquares >= 1, text: 'colored first' },
        { condition: currentColoredSquares >= 5, text: '5 colored' },
        { condition: currentColoredSquares >= 10, text: '10 colored' },
        { condition: currentColoredSquares >= 12, text: 'first star' },
        { condition: currentColoredSquares >= 14, text: 'all stars in color' },
        { condition: currentColoredSquares >= 16, text: 'all stars' },
        { condition: currentColoredSquares >= 18, text: 'all tasks in color' },
        { condition: currentColoredSquares >= 20, text: 'uncolored' },
        { condition: currentColoredSquares >= 22, text: 'two different colors' },
        { condition: currentColoredSquares >= 25, text: 'colored each color' },
        { condition: currentColoredSquares >= squareNumber / 4, text: '25% colored' },
        { condition: currentColoredSquares >= squareNumber / 2, text: '50% colored' },
        { condition: currentColoredSquares >= (squareNumber / 4) * 3, text: '75% colored' },
        { condition: currentColoredSquares + 2 >= squareNumber, text: 'almost finish' },
        { condition: currentColoredSquares === squareNumber, text: 'all colored' },
      ];
    const [conditions, setConditions] = useState(achievementItems.map(() => false));
  
    const handleButtonClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClosePopover = () => {
      setAnchorEl(null);
    };

    const isOpen = Boolean(anchorEl);

    const getIconColor = (currentIndex) => {
        if (achievementItems[currentIndex].condition && (squareNumber != -1) && !conditions[currentIndex]) {
            setConditions((prevConditions) => {
                const newConditions = [...prevConditions];
                newConditions[currentIndex] = true;
                return newConditions;
            });
        }

        return conditions[currentIndex] ? theme.palette.yellow : theme.palette.gray;
    }
  
    return (
      <>
        <Tooltip title={<Typography fontSize='16px'>Achievements</Typography>} arrow>
            <CustomButton
            variant="outlined"
            borderColor={theme.palette['gray']}
            onClick={handleButtonClick}
            >
                <WorkspacePremiumRoundedIcon style={{ color: theme.palette.yellow, fontSize: '70px' }} />
            </CustomButton>
        </Tooltip>
        <Popover
          open={isOpen}
          anchorEl={anchorEl}
          onClose={handleClosePopover}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            style={{
              textAlign: 'center',
              marginTop: '16px',
              color: theme.palette.yellow
            }}
          >
            Achievements
          </Typography>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', padding: '16px', position: 'relative', maxWidth: '34vw', width: '100%', maxHeight: '20vw', overflow: 'auto' }}>
                {achievementIcons.map((Icon, index) => (
                    <Tooltip title={<Typography fontSize='16px'>{achievementItems[index].text}</Typography>} arrow>
                        <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px' }}>
                            <Icon style={{ color: getIconColor(index), fontSize: '2.5rem', marginBottom: '10px' }} />
                        </div>
                    </Tooltip>
                ))}
          </div>
        </Popover>
      </>
    );
  };

  export default Achievements;