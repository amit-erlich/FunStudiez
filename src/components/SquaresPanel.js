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
  console.log('in SquaresPanel');

  useEffect(() => {
    console.log('squaresData changed:', squaresData);
    console.log('before for-loop in useEffect (SquaresPanel)');
    console.log(`-->  squaresData.length=${Object.keys(squaresData).length}`);

    for (const taskKeyString in squaresData) {
      console.log('in for-loop');
      if (squaresData.hasOwnProperty(taskKeyString)) {
        const taskData = squaresData[taskKeyString];

        console.log('taskKeyString:', taskKeyString);
        console.log('Task Squares:', taskData.squares);
        console.log('Task Star Squares:', taskData.starSquares);
        console.log('Task Text:', taskData.taskText);

        const [taskType, taskNumber] = taskKeyString.split('_');
        const { color, starGap } = theme[taskType][taskNumber];

        if (taskType === 'additionalTask') {
          theme[taskType][taskNumber]['text'] = taskData.taskText;
        }

        console.log(`taskType=${taskType}, taskNumber=${taskNumber}, taskData.squares=${taskData.squares}, taskData.starSquares=${taskData.starSquares}`);
        fillTaskSquares(shuffledTaskSquares, taskType, taskNumber, taskData.squares);
        fillStarSquares(shuffledTaskSquares, taskData.starSquares, theme.palette[color], starGap);
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

  const fillTaskSquares = (array, taskType, taskNumber, squareNumber, questionNum) => {
    const isSolveTask3 = (taskType === 'S' && taskNumber === 'task3');
  
    for (let i = 1; i <= squareNumber.length; i++) {
      array.push(<TaskSquare key={`${taskType}${taskNumber}${i}`} isColored={squareNumber[i]} taskType={taskType} taskNumber={taskNumber} number={isSolveTask3 ? questionNum : i} onClick={onClickSquare} />);
    }
  };
  
  const fillStarSquares = (array, squareNumber, color, starGap) => {
    for (let i = 1; i <= squareNumber.length; i++) {
      array.push(<StarSquare key={`${color}${i}`} isColored={squareNumber[i]} color={color} number={starGap * i} breakTime={breakTimes[(i - 1) % breakTimes.length]} onClick={onClickSquare} onStarClick={onClickStarSquare} />);
    }
  };

  return (
    <div>
        {loading ? <div>Loading...</div> : shuffledTaskSquares.map((taskSquare) => taskSquare)}
    </div>
  );
}

export default SquaresPanel;
