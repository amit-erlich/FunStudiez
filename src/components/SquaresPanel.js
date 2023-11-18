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

const SquaresPanel = ({ squaresData, onClickSquare, onClickStarSquare }) => {
  const theme = useTheme();
  const [shuffledTaskSquares, setShuffledTaskSquares] = useState([]);
  const [loading, setLoading] = useState(true);
  const breakTimes = ['5', '10', '15', '20', '25', '30', '40'];

  useEffect(() => {
    for (const taskKeyString in squaresData) {
      if (squaresData.hasOwnProperty(taskKeyString)) {
        const taskData = squaresData[taskKeyString];

        const [taskType, taskNumber] = taskKeyString.split('_');
        const { color, starGap } = theme[taskType][taskNumber];

        if (taskType === 'additionalTask') {
          theme[taskType][taskNumber]['text'] = taskData.taskText;
        }

        fillTaskSquares(shuffledTaskSquares, taskType, taskNumber, taskData.squares, taskData.questionsNumber, taskKeyString);
        fillStarSquares(shuffledTaskSquares, taskData.starSquares, theme.palette[color], starGap, taskKeyString);
      }
    }
    setLoading(false);
  }, [squaresData, theme]);

  useEffect(() => {
    if (!loading) { // Check if data is ready
      const shuffledSquares = shuffleArray([...shuffledTaskSquares]);
      setShuffledTaskSquares(shuffledSquares);
    }
  }, [loading]);

  const fillTaskSquares = (array, taskType, taskNumber, squareNumber, questionNum, taskKey) => {
    const isSolveTask3 = (taskType === 'solvingTask' && taskNumber === 'task3');
  
    for (let i = 1; i <= squareNumber.length; i++) {
      array.push(<TaskSquare key={`${taskType}${taskNumber}${i}`} isColored={squareNumber[i - 1]} taskType={taskType} taskNumber={taskNumber} number={isSolveTask3 ? questionNum : i} taskKey={taskKey} squareIndex={i} onClick={onClickSquare} />);
    }
  };
  
  const fillStarSquares = (array, squareNumber, color, starGap, taskKey) => {
    for (let i = 1; i <= squareNumber.length; i++) {
      array.push(<StarSquare key={`${color}${i}`} isColored={squareNumber[i - 1]} color={color} number={starGap * i} breakTime={breakTimes[(i - 1) % breakTimes.length]} taskKey={taskKey} squareIndex={i} onClick={onClickSquare} onStarClick={onClickStarSquare} />);
    }
  };

  return (
    <div>
        {loading ? <div>Loading...</div> : shuffledTaskSquares.map((taskSquare) => taskSquare)}
    </div>
  );
}

export default SquaresPanel;
