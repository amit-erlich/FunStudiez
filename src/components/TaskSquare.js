import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Button, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/StarRounded'; //StarRateRounded

const CustomButton = styled(Button)(({ theme, borderColor, bgColor }) => ({
  width: '140px',
  height: '140px',
  fontSize: '22px',
  color: 'black',
  overflow: 'hidden',
  fontWeight: 'bold',
  fontFamily: 'cursive',
  textTransform: 'none',
  lineHeight: '1.2',
  borderRadius: '0%',
  borderWidth: '5px',
  borderColor: borderColor,
  backgroundColor: bgColor,
  opacity: 1,
  '&:hover': {
    borderWidth: '5px',
    borderColor: borderColor,
    backgroundColor: bgColor,
    opacity: 0.7,
  },
}));

const Square = ({
    text,
    number,
    color,
    addStar
}) => {
  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(!clicked);
  };

  const borderColor = color;
  const bgColor = clicked ? `${color}66` : 'transparent';

  return (
    <CustomButton
      variant="outlined"
      borderColor={borderColor}
      bgColor={bgColor}
      onClick={handleButtonClick}
    >
        {addStar && (
            <>
                <StarIcon style={{ color: borderColor, fontSize: '120px' }} />
                <Typography
                    style={{
                        position: 'absolute',
                        top: '39%',
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: '22px',
                        fontFamily: 'cursive',
                    }}
                >
                    {number}
                </Typography>
                <Typography
                    style={{
                    position: 'absolute',
                    top: '83%',
                    color: 'black',
                    fontSize: '15px',
                    fontFamily: 'cursive',
                    }}
                >
                    {text}
                </Typography>
            </>
        )}
        {!addStar && text}
    </CustomButton>
  );
};

export default Square;
