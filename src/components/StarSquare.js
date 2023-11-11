import React, { useState } from 'react';
import Square from './Square';

const StarSquare = ({
    color,
    number,
    breakTime,
    onClick,
    onStarClick
}) => {

  return (
    <Square color={color} isStar={true} number={number} breakTime={breakTime} onClick={onClick} onStarClick={onStarClick} />
  );
};

export default StarSquare;