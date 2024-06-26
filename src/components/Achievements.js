import React, { useState } from 'react';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import { Typography, IconButton, Popover, Tooltip, Snackbar } from '@mui/material';

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
  
  const Achievements = ({ 
    currentColoredSquares, 
    squareNumber,
    isFirstStarColored,
    isAllStarsInColor,
    isAllStarsColored,
    isAllTasksInColor,
    isUncolored,
    is2ColorsColored,
    isAllColorsColored,
  }) => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    
    const achievementItems = [
        { condition: currentColoredSquares >= 0, text: 'Starting new study' },
        { condition: currentColoredSquares >= 1, text: 'First square colored' },
        { condition: currentColoredSquares >= 5, text: '5 colored squares' },
        { condition: currentColoredSquares >= 10, text: '10 colored squares' },
        { condition: isFirstStarColored, text: 'First star colored' },
        { condition: isAllStarsInColor, text: 'All stars in color' },
        { condition: isAllStarsColored, text: 'All stars' },
        { condition: isAllTasksInColor, text: 'All tasks in color' },
        { condition: isUncolored, text: 'Uncolored' },
        { condition: is2ColorsColored, text: 'Two different colors' },
        { condition: isAllColorsColored, text: 'Colored each color' },
        { condition: currentColoredSquares >= squareNumber / 4, text: '25% colored' },
        { condition: currentColoredSquares >= squareNumber / 2, text: '50% colored' },
        { condition: currentColoredSquares >= (squareNumber / 4) * 3, text: '75% colored' },
        { condition: currentColoredSquares + 2 >= squareNumber, text: 'Almost finish' },
        { condition: currentColoredSquares === squareNumber, text: 'All colored' },
      ];
    const [conditions, setConditions] = useState(achievementItems.map(() => false));
    const [newAchievementText, setNewAchievementText] = useState(achievementItems[0].text);

    const getIconColor = (currentIndex) => {
        if (achievementItems[currentIndex].condition && (squareNumber !== -1) && !conditions[currentIndex]) {
            setConditions((prevConditions) => {
                const newConditions = [...prevConditions];
                newConditions[currentIndex] = true;
                return newConditions;
            });
            setNewAchievementText(achievementItems[currentIndex].text);
            handleClick()
        }

        return conditions[currentIndex] ? theme.palette.yellow : theme.palette.gray;
    }
  

    const handleButtonClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClosePopover = () => {
      setAnchorEl(null);
    };

    const isOpen = Boolean(anchorEl);


    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };
  
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
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', padding: '16px', position: 'relative', maxWidth: '480px', width: '100%', maxHeight: '20vw', overflow: 'auto' }}>
                {achievementIcons.map((Icon, index) => (
                    <Tooltip title={<Typography fontSize='16px'>{achievementItems[index].text}</Typography>} arrow>
                        <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px' }}>
                            <Icon style={{ color: getIconColor(index), fontSize: '2.5rem', marginBottom: '10px' }} />
                        </div>
                    </Tooltip>
                ))}
          </div>
        </Popover>
        <Snackbar
            open={open}
            autoHideDuration={5000} // Duration in milliseconds (5 seconds in this case)
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} // Position of the Snackbar
            message={`NEW achievement! ${newAchievementText}`}
        >
        </Snackbar>
      </>
    );
  };

  export default Achievements;