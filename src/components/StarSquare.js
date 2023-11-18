import React, { useState } from 'react';
import Square from './Square';

const StarSquare = ({
    isColored,
    color,
    number,
    breakTime,
    taskKey,
    squareIndex,
    onClick,
    onStarClick
}) => {

  return (
    <Square isColored={isColored} color={color} isStar={true} number={number} breakTime={breakTime} taskKey={taskKey} squareIndex={squareIndex} onClick={onClick} onStarClick={onStarClick} />
  );
};

export default StarSquare;