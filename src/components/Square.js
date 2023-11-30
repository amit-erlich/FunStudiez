import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Button, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/StarRounded';

const CustomButton = styled(Button)(({ borderColor, bgColor }) => ({
  width: '140px',
  height: '140px',
  margin: '1px',
  fontSize: '20px',
  color: 'black',
  overflow: 'hidden',
  fontWeight: 'bold',
  fontFamily: 'cursive',
  textTransform: 'none',
  lineHeight: '1.2',
  borderRadius: '10%',
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
    isColored,
    color,
    isStar,
    text,
    number,
    breakTime,
    taskKey,
    squareIndex,
    onClick,
    onStarClick
}) => {
  const [clicked, setClicked] = useState(isColored);

  const handleButtonClick = () => {
    setClicked(!clicked);
    onClick(clicked, taskKey, squareIndex, isStar);
    if (isStar && !clicked) {
      onStarClick(breakTime, color);
      //checkCanMarkStar(taskKey, number);
    }

    // setClicked(!clicked);
    // onClick(clicked, taskKey, squareIndex, isStar);
    // if (isStar && !clicked && checkCanMarkStar(taskKey, number)) {
    //   onStarClick(breakTime, color);
    // }

    // if (isStar && !clicked) {
    //   onStarClick(taskKey, number, breakTime, color);
    //   // if (checkCanMarkStar()) {
        
    //   // }
    // } else {
    //   setClicked(!clicked);
    //   onClick(clicked, taskKey, squareIndex, isStar);
    // }
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
      {!isStar && text}
      {isStar && (
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
            {breakTime} min break
          </Typography>
        </>
      )}
    </CustomButton>
  );
};

export default Square;
