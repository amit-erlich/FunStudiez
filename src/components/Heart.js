import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Typography, IconButton } from '@mui/material';
import HeartIcon from '@mui/icons-material/FavoriteRounded';
import BrokenHeartIcon from '@mui/icons-material/HeartBrokenRounded';

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

const Heart = ({
  number,
  color,
  clickable,
  onClick
}) => {
  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    if (clickable) {
      setClicked(true);
      onClick();
    }
  };

  const borderColor = color;
  const bgColor = clicked ? `${color}95` : 'transparent';

  return (
    <CustomButton
      variant="outlined"
      borderColor={borderColor}
      onClick={handleButtonClick}
    >
        {!clicked && <HeartIcon style={{ color: borderColor, fontSize: '45px' }} />}
        {clicked && <BrokenHeartIcon style={{ color: bgColor, fontSize: '45px' }} />}
        <Typography
            style={{
                position: 'absolute',
                top: '20%',
                color: 'black',
                fontSize: '18px',
                fontFamily: 'cursive',
            }}
        >
            {number}
        </Typography>
    </CustomButton>
  );
};

export default Heart;
