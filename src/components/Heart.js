import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Button, Typography, IconButton } from '@mui/material';
import HeartIcon from '@mui/icons-material/FavoriteRounded';
import BrokenHeartIcon from '@mui/icons-material/HeartBrokenRounded';

const CustomButton = styled(IconButton)(({ theme, borderColor, bgColor }) => ({
  width: '90px',
  height: '90px',
  fontSize: '22px',
  fontStyle: 'bold',
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

const Heart = ({
    number,
    color
}) => {
  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(true);
  };

  const borderColor = color;
  const bgColor = clicked ? `${color}95` : 'transparent';

  return (
    <CustomButton
      variant="outlined"
      borderColor={borderColor}
      bgColor={bgColor}
      onClick={handleButtonClick}
    >
        {!clicked && <HeartIcon style={{ color: borderColor, fontSize: '85px' }} />}
        {clicked && <BrokenHeartIcon style={{ color: bgColor, fontSize: '85px' }} />}
        <Typography
            style={{
                position: 'absolute',
                top: '32%',
                color: 'black',
                fontWeight: 'bold',
                fontSize: '22px',
                fontFamily: 'cursive',
            }}
        >
            {number}
        </Typography>
    </CustomButton>
  );
};

export default Heart;
