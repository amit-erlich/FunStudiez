import React, { useState } from 'react';
import Square from './Square';
import theme from '../theme';

const TaskSquare = ({
    taskType,
    taskNumber,
    number,
}) => {
    const typy = taskType === 'R' ? 'readingTask' : (taskType === 'S' ? 'solvingTask' : 'additionalTask');
    const { text, color } = theme[typy][taskNumber];
    const squareText = 
        (taskType === 'R' ? 
            `Read ${text} no.${number}` :
            (taskType != 'S' ? 
                text :
                (taskNumber === 'task3' ? 
                    `Solve ${number} test questions` : 
                    `Solve ${text} no.${number}`)));

  return (
    <Square color={theme.palette[color]} text={squareText} />
  );
};

export default TaskSquare;