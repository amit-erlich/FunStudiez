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

const SquaresPanel = ({ squaresData, updateSquareNumber, onClickSquare, onClickStarSquare }) => {
  const theme = useTheme();
  const [shuffledTaskSquares, setShuffledTaskSquares] = useState([]);
  const taskSquares = [];
  const breakTimes = ['5', '10', '15', '20', '25', '30', '40'];
  console.log('in SquaresPanel');
  
  useEffect(() => {
    const initSquares = () => {
      //console.log('in initSquares');
      fillTaskSquares(taskSquares, 'R', 'task1', 8);
      fillTaskSquares(taskSquares, 'R', 'task2', 12);
      fillTaskSquares(taskSquares, 'S', 'task1', 9);
      fillTaskSquares(taskSquares, 'S', 'task2', 4);
      fillTaskSquares(taskSquares, 'S', 'task3', 4, 3);

      theme['additionalTask']['task1']['text'] = 'Read 5 sentences';
      fillTaskSquares(taskSquares, 'O', 'task1', 6);

      theme['additionalTask']['task2']['text'] = 'Read formula sheet';
      fillTaskSquares(taskSquares, 'O', 'task2', 1);

      //updateSquareNumber(taskSquares.length);

      // console.log('before for-loop');
      // console.log(`squaresData.length=${Object.keys(squaresData).length}`);
      // for (const taskKeyString in squaresData) {
      //   console.log('in for-loop');
      //   if (squaresData.hasOwnProperty(taskKeyString)) {
      //     const taskData = squaresData[taskKeyString];
          
      //     console.log('taskKeyString:', taskKeyString);
      //     console.log('Task Squares:', taskData.squares);
      //     console.log('Task Star Squares:', taskData.starSquares);
      //     console.log('Task Text:', taskData.taskText);
      //   }
      // }

      const shuffledSquares = shuffleArray([...taskSquares]);
      setShuffledTaskSquares(shuffledSquares);
    };

    //console.log('------------------- calling initSquares');
    initSquares();
  }, [theme]);

  useEffect(() => {
    console.log('----------------before for-loop');
    console.log(`squaresData.length=${Object.keys(squaresData).length}`);
    for (const taskKeyString in squaresData) {
      console.log('in for-loop');
      if (squaresData.hasOwnProperty(taskKeyString)) {
        const taskData = squaresData[taskKeyString];
        
        console.log('taskKeyString:', taskKeyString);
        console.log('Task Squares:', taskData.squares);
        console.log('Task Star Squares:', taskData.starSquares);
        console.log('Task Text:', taskData.taskText);
      }
    }
  }, [squaresData]);

  const fillTaskSquares = (array, taskType, taskNumber, squareNumber, questionNum) => {
    const isSolveTask3 = (taskType === 'S' && taskNumber === 'task3');
  
    for (let i = 1; i <= squareNumber; i++) {
      array.push(<TaskSquare key={`${taskType}${taskNumber}${i}`} taskType={taskType} taskNumber={taskNumber} number={isSolveTask3 ? questionNum : i} onClick={onClickSquare} />);
    }

    const typy = taskType === 'R' ? 'readingTask' : (taskType === 'S' ? 'solvingTask' : 'additionalTask');
    const { color, starGap } = theme[typy][taskNumber];
    const starSquareNumber = Math.floor(squareNumber / starGap);

    fillStarSquares(array, starSquareNumber, theme.palette[color], starGap);
  };
  
  const fillStarSquares = (array, squareNumber, color, starGap) => {
    for (let i = 1; i <= squareNumber; i++) {
      array.push(<StarSquare key={`${color}${i}`} color={color} number={starGap * i} breakTime={breakTimes[(i - 1) % breakTimes.length]} onClick={onClickSquare} onStarClick={onClickStarSquare} />);
    }
  };

  return (
    <div>
        {shuffledTaskSquares.map((taskSquare) => taskSquare)}
    </div>
  );
}

export default SquaresPanel;
