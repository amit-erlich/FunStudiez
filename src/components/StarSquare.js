import React, { useState } from 'react';
import Square from './Square';

const StarSquare = ({
    color,
    number,
    breakTime,
    onClick
}) => {

  return (
    <Square color={color} isStar={true} number={number} breakTime={breakTime} onStarClick={onClick} />
  );
};

export default StarSquare;