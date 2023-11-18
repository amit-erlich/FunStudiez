import React, { useState } from 'react';
import Square from './Square';
import theme from '../theme';

const TaskSquare = ({
    isColored,
    taskType,
    taskNumber,
    number,
    taskKey,
    squareIndex,
    onClick
}) => {
    const typy = taskType === 'R' ? 'readingTask' : (taskType === 'S' ? 'solvingTask' : 'additionalTask');
    const { text, color } = theme[taskType][taskNumber];
    const squareText = 
        (taskType === 'readingTask' ? 
            `Read ${text} no.${number}` :
            (taskType != 'solvingTask' ? 
                text :
                (taskNumber === 'task3' ? 
                    `Solve ${number} test questions` : 
                    `Solve ${text} no.${number}`)));

  return (
    <Square isColored={isColored} color={theme.palette[color]} text={squareText} taskKey={taskKey} squareIndex={squareIndex} onClick={onClick} />
  );
};

export default TaskSquare;