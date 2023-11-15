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
  
  const Achievements = ({ index }) => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleButtonClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClosePopover = () => {
      setAnchorEl(null);
    };

    const isOpen = Boolean(anchorEl);
  
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
          <div style={{ padding: '16px', position: 'relative', width: '36vw', maxHeight: '20vw', overflow: 'auto' }}>
            {/* {progressIcons.map((Icon, i) => (
                <div key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Icon style={{ color: theme.palette['gray'], fontSize: '44px' }} />
                <Typography
                  variant="body2"
                  style={{
                    textAlign: 'center',
                    marginTop: '4px',
                  }}
                >
                  icon
                </Typography>
              </div>
              ))} */}
              {achievementIcons.map((Icon, i) => (
                <Icon key={i} style={{ color: theme.palette['gray'], fontSize: '44px', padding: '10px'}} />
              ))}
          </div>
        </Popover>
      </>
    );
  };

  export default Achievements;