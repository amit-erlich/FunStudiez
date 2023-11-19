import './App.css';
import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import HeartsBar from './components/HeartsBar';
import CourseDetails from './components/CourseDetails';
import Popup from './components/Popup';
import TimerPopup from './components/TimerPopup';
import SquaresPanel from './components/SquaresPanel';
import ProgressAvatar from './components/ProgressAvatar';
import AppMainBar from './components/AppMainBar';
import Achievements from './components/Achievements';

function App() {
  const theme = useTheme();
  const [timerTime, setTimerTime] = useState(0);
  const [timerButtonColor, setTimerButtonColor] = useState(theme.palette.black);
  const [showTimerPopup, setShowTimerPopup] = useState(false);
  const [showTimerEndPopup, setShowTimerEndPopup] = useState(false);
  const [squareNumber, setSquareNumber] = useState(-1);
  const [coloredSquareNumber, setColoredSquareNumber] = useState(0);
  const [progressIndex, setProgressIndex] = useState(0);

  const [isFirstStarColored, setIsFirstStarColored] = useState(false);
  const [isAllStarsInColor, setIsAllStarsInColor] = useState(false);
  const [isAllStarsColored, setIsAllStarsColored] = useState(false);
  const [isAllTasksInColor, setIsAllTasksInColor] = useState(false);
  const [isUncolored, setIsUncolored] = useState(false);
  const [is2ColorsColored, setIs2ColorsColored] = useState(false);
  const [isAllColorsColored, setIsAllColorsColored] = useState(false);

  const courseName = 'Complexity';
  const tastDate = '28/01/24';
  const studyData = {};

  //---------------------------------------------------------

  const initializeTaskData = (numSquares, numStarSquares, questionsNumber, taskText) => ({
    squares: Array(numSquares).fill(false),
    starSquares: Array(numStarSquares).fill(false),
    questionsNumber: questionsNumber,
    taskText: taskText,
  });

  const initializeExampleSettingArray = (taskType, taskNumber, squareNumber, questionsNumber) => ({
    taskType: taskType,
    taskNumber: taskNumber,
    squareNumber: squareNumber,
    questionsNumber: questionsNumber,
  });

  const createNewStudy = (settingArray, additionatText) => {
    let textIndex = 0;
    let countSquares = 0;

    for (let i = 0; i < settingArray.length; i++) {
      const type = settingArray[i].taskType === 'R' ? 'readingTask' : (settingArray[i].taskType === 'S' ? 'solvingTask' : 'additionalTask');
      const {starGap} = theme[type][`task${settingArray[i].taskNumber}`];
      const starSquareNumber = Math.floor(settingArray[i].squareNumber / starGap);
      const text = type === 'additionalTask' ? additionatText[textIndex++]: '';

      const taskKey = `${type}_task${settingArray[i].taskNumber}`;
      const taskData = initializeTaskData(settingArray[i].squareNumber, starSquareNumber, settingArray[i].questionsNumber, text);
      studyData[taskKey] = taskData;

      countSquares += settingArray[i].squareNumber + starSquareNumber;
    }

    setColoredSquareNumber(0);
    setSquareNumber(countSquares);
  }

  useEffect(() => {
    const creatExampleStudy = () => {
      const settingArray = [];
  
      settingArray.push(initializeExampleSettingArray('R', 1, 8));
      settingArray.push(initializeExampleSettingArray('R', 2, 12));
  
      settingArray.push(initializeExampleSettingArray('S', 1, 9));
      settingArray.push(initializeExampleSettingArray('S', 2, 4));
      settingArray.push(initializeExampleSettingArray('S', 3, 4, 3));
  
      settingArray.push(initializeExampleSettingArray('O', 1, 6));
      settingArray.push(initializeExampleSettingArray('O', 2, 1));
  
      const additionatText = ['Read 5 sentences', 'Read formula sheet'];
  
      createNewStudy(settingArray, additionatText);
    }
    creatExampleStudy();
  }, [theme]);

  //---------------------------------------------------------

  const setTimerPopup = (time, color) => {
    setTimerTime(time);
    setTimerButtonColor(color)
    setShowTimerPopup(true);
  }

  const handleStarSquareClicked = (time, color) => {
    // TO-DO: check if can mark star
    setTimerPopup(time, color);
  }

  const handleTimerEnd = () => {
    setShowTimerPopup(false);
    setShowTimerEndPopup(true);
  };

  const checkAllStarsColored = () => {
    let isAllColored = true;

    for (const taskKeyString in studyData) {
      if (studyData.hasOwnProperty(taskKeyString)) {
        isAllColored = isAllColored && studyData[taskKeyString].starSquares.every(value => value === true);
      }
    }
    return isAllColored;
  }

  const getNumberOfColoredColors = () => {
    let numberOfColoredColors = 0;

    for (const taskKeyString in studyData) {
      if (studyData.hasOwnProperty(taskKeyString)) {
        numberOfColoredColors += 
          studyData[taskKeyString].starSquares.some(value => value === true) || studyData[taskKeyString].squares.some(value => value === true)
          ? 1 : 0;
      }
    }
    return numberOfColoredColors;
  }

  const getNumberOfDifferentColors = () => {
    return Object.keys(studyData).length;
  }

  const increaseOrDecreaseSquareNumber = (toDecrease, taskKey, squareIndex, isStar) => {
    setColoredSquareNumber(prevSquareNumber => prevSquareNumber + (toDecrease ? -1 : 1));

    const taskData = studyData[taskKey];
    if (isStar) { 
      taskData.starSquares[squareIndex] = !taskData.starSquares[squareIndex];
      setIsFirstStarColored(taskData.starSquares[squareIndex] || isFirstStarColored);
      setIsAllStarsInColor(taskData.starSquares.every(value => value === true) || isAllStarsInColor);
      setIsUncolored(!taskData.starSquares[squareIndex] || isUncolored);
      setIsAllStarsColored(checkAllStarsColored() || isAllStarsColored);
    } else {
      taskData.squares[squareIndex] = !taskData.squares[squareIndex];
      setIsAllTasksInColor(taskData.squares.every(value => value === true) || isAllTasksInColor);
      setIsUncolored(!taskData.squares[squareIndex] || isUncolored);
    }
    const numberColoredColors = getNumberOfColoredColors();
    setIs2ColorsColored(numberColoredColors >= 2 || is2ColorsColored);
    setIsAllColorsColored(numberColoredColors === getNumberOfDifferentColors() || isAllColorsColored);
  };
  
  useEffect(() => {
    const updateProgressIndex = () => {
      const tenOfSquareNumber = Math.ceil((squareNumber - 1) / 9);
  
      if (coloredSquareNumber === tenOfSquareNumber * progressIndex + 1) {
        setProgressIndex((prevIndex) => ((prevIndex < 8) ? prevIndex + 1 : prevIndex));
      } else if (coloredSquareNumber === squareNumber) {
        setProgressIndex((prevIndex) => (prevIndex + 1));
      } 
    };
    updateProgressIndex();

    // first-star, AllStarsInColor, AllStars, AllTasksInColor, uncolored, 2-different-colors, colored-each-color

  }, [coloredSquareNumber]);

  return (
    <div className="App">
      {showTimerPopup && (
        <TimerPopup initialTime={60*timerTime} onTimerEnd={handleTimerEnd} color={timerButtonColor} closePopup={() => setShowTimerPopup(false)} />
      )}
      {showTimerEndPopup && (
        <Popup headline={`Time's up!`} buttonColor={timerButtonColor} buttonText='Back to work' onClick={() => setShowTimerEndPopup(false)} />
      )}
      <header className="App-header">
        <AppMainBar/>
        <div style={{ position: 'absolute', top: 70, left: 20, display: 'flex', alignItems: 'flex-start', marginTop: '10px' }}>
          <HeartsBar text='15 min break' number='3' color={theme.palette.red} onClick={() => setTimerPopup(15, theme.palette.pink)} />
          <HeartsBar text='30 min break' number='3' color={theme.palette.green} onClick={() => setTimerPopup(30, theme.palette.green)} />
        </div>
        <div style={{ position: 'absolute', top: 70, display: 'flex', alignItems: 'flex-start' }}>
          <CourseDetails courseName={courseName} tastDate={tastDate}></CourseDetails>
        </div>
        <div style={{ position: 'absolute', top: 75, right: 20, display: 'flex', alignItems: 'flex-start', marginTop: '10px' }}>
          <Achievements 
            currentColoredSquares={coloredSquareNumber}
            squareNumber={squareNumber}
            isFirstStarColored={isFirstStarColored}
            isAllStarsInColor={isAllStarsInColor}
            isAllStarsColored={isAllStarsColored}
            isAllTasksInColor={isAllTasksInColor}
            isUncolored={isUncolored}
            is2ColorsColored={is2ColorsColored}
            isAllColorsColored={isAllColorsColored}
          />
        </div>
        <div style={{ position: 'absolute', top: 75, right: 120, display: 'flex', alignItems: 'flex-start', marginTop: '10px' }}>
          <ProgressAvatar index={progressIndex} wholeNumber={squareNumber} />
        </div>
        <div style={{ position: 'absolute', top: '30%', maxWidth: '90vw', width: 'fit-content', maxHeight: '30vw', overflow: 'auto'}}>
          <SquaresPanel squaresData={studyData} onClickSquare={increaseOrDecreaseSquareNumber} onClickStarSquare={handleStarSquareClicked} />
        </div>
      </header>
    </div>
  );
}

export default App;
