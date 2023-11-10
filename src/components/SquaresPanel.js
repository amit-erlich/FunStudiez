import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import StarSquare from './StarSquare';
import TaskSquare from './TaskSquare';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const SquaresPanel = ({ onClickStarSquare }) => {
  const theme = useTheme();
  const [shuffledTaskSquares, setShuffledTaskSquares] = useState([]);
  const taskSquares = [];
  const breakTimes = ['5', '10', '15', '20', '25', '30', '40'];
  
  useEffect(() => {
    const initSquares = () => {
      fillTaskSquares(taskSquares, 8, 'R', 'task1');
      fillTaskSquares(taskSquares, 12, 'R', 'task2');
      fillTaskSquares(taskSquares, 9, 'S', 'task1');
      fillTaskSquares(taskSquares, 4, 'S', 'task2');
      fillTaskSquares(taskSquares, 4, 'S', 'task3', 3);

      theme['additionalTask']['task1']['text'] = 'Read 5 sentences';
      fillTaskSquares(taskSquares, 6, 'O', 'task1');

      theme['additionalTask']['task2']['text'] = 'Read formula sheet';
      fillTaskSquares(taskSquares, 1, 'O', 'task2');

      const shuffledSquares = shuffleArray([...taskSquares]);
      setShuffledTaskSquares(shuffledSquares);
    };

    initSquares();
  }, []); // theme

  const fillTaskSquares = (array, squareNumber, taskType, taskNumber, questionNum) => {
    const isSolveTask3 = (taskType === 'S' && taskNumber === 'task3');
  
    for (let i = 1; i <= squareNumber; i++) {
      array.push(<TaskSquare key={`${taskType}${taskNumber}${i}`} taskType={taskType} taskNumber={taskNumber} number={isSolveTask3 ? questionNum : i} />);
    }

    const typy = taskType === 'R' ? 'readingTask' : (taskType === 'S' ? 'solvingTask' : 'additionalTask');
    const { color, starGap } = theme[typy][taskNumber];
    const starSquareNumber = Math.floor(squareNumber / starGap);

    fillStarSquares(array, starSquareNumber, theme.palette[color], starGap);
  };
  
  const fillStarSquares = (array, squareNumber, color, starGap) => {
    for (let i = 1; i <= squareNumber; i++) {
      array.push(<StarSquare key={`${color}${i}`} color={color} number={starGap * i} breakTime={breakTimes[i % breakTimes.length]} onClick={onClickStarSquare} />);
    }
  };

  return (
    <div>
        {shuffledTaskSquares.map((taskSquare) => taskSquare)}
    </div>
  );
}

export default SquaresPanel;
