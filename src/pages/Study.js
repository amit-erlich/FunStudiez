import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import HeartsBar from '../components/HeartsBar';
import CourseDetails from '../components/CourseDetails';
import Popup from '../components/Popup';
import TimerPopup from '../components/TimerPopup';
import SquaresPanel from '../components/SquaresPanel';
import ProgressAvatar from '../components/ProgressAvatar';
import AppMainBar from '../components/AppMainBar';
import Achievements from '../components/Achievements';
import { useLocation } from 'react-router-dom';

function Study() {
  const theme = useTheme();
  const location = useLocation();
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

  const {
    isNewStudy,

    courseName, 
    testDate,

    presentationsNumber, 
    notebooksNumber,
    assignmentsNumberR,
    pagesNumber,

    assignmentsNumberS,
    testsNumber,
    questionsNumber,

    additionalTask1Name,
    additionalTask1Number,
    additionalTask2Name,
    additionalTask2Number,
    additionalTask3Name,
    additionalTask3Number,
    additionalTask4Name,
    additionalTask4Number } = location.state;
  const studyData = {};

  //---------------------------------------------------------

  const initializeTaskData = (numSquares, numStarSquares, questionsNumber) => ({
    squares: Array(numSquares).fill(false),
    starSquares: Array(numStarSquares).fill(false),
    questionsNumber: questionsNumber,
  });

  const initializeExampleSettingsArray = (taskType, taskNumber, squareNumber, questionsNumber) => ({
    taskType: taskType,
    taskNumber: taskNumber,
    squareNumber: squareNumber,
    questionsNumber: questionsNumber,
  });

  const createNewStudy = (settingsArray, additionalText) => {
    let textIndex = 0;
    let countSquares = 0;

    for (let i = 0; i < settingsArray.length; i++) {
      const type = settingsArray[i].taskType;

      const isReadTask4 = (type === 'readingTask' && settingsArray[i].taskNumber === 4);
      if (isReadTask4) {
        theme.readingTask.task4.pages = settingsArray[i].squareNumber;
      }

      const squaresNumber = (isReadTask4 ? theme.readingTask.task4.squaresNumber : Math.floor(settingsArray[i].squareNumber));
      const {starGap} = theme[type][`task${settingsArray[i].taskNumber}`];
      const starSquareNumber = Math.floor(squaresNumber / starGap);

      if (type === 'additionalTask') {
        theme[type][`task${settingsArray[i].taskNumber}`]['text'] = additionalText[textIndex++];
      }

      const taskKey = `${type}_task${settingsArray[i].taskNumber}`;
      const taskData = initializeTaskData(squaresNumber, starSquareNumber, settingsArray[i].questionsNumber);
      studyData[taskKey] = taskData;

      countSquares += squaresNumber + starSquareNumber;
    }

    setColoredSquareNumber(0);
    setSquareNumber(countSquares);
  }

  useEffect(() => {
    // const creatExampleStudy = () => {
    //   const settingsArray = [];
  
    //   settingsArray.push(initializeExampleSettingsArray('R', 1, 4));
    //   //settingsArray.push(initializeExampleSettingsArray('R', 4, 100));
  
    //   //settingsArray.push(initializeExampleSettingsArray('S', 1, 9));
    //   //settingsArray.push(initializeExampleSettingsArray('S', 2, 4));
    //   //settingsArray.push(initializeExampleSettingsArray('S', 3, 4, 3));
  
    //   settingsArray.push(initializeExampleSettingsArray('O', 1, 6));
    //   settingsArray.push(initializeExampleSettingsArray('O', 2, 1));
  
    //   const additionalText = ['Read 5 sentences', 'Read formula sheet'];
  
    //   createNewStudy(settingsArray, additionalText);
    // }
    // creatExampleStudy();

    const creatStudy = () => {
      const settingsArray = [];

      if (presentationsNumber != '' && presentationsNumber > 0 ) { settingsArray.push(initializeExampleSettingsArray('readingTask', 1, presentationsNumber)) };
      if (notebooksNumber != '' && notebooksNumber > 0 ) { settingsArray.push(initializeExampleSettingsArray('readingTask', 2, notebooksNumber)) };
      if (assignmentsNumberR != '' && assignmentsNumberR > 0 ) { settingsArray.push(initializeExampleSettingsArray('readingTask', 3, assignmentsNumberR)) };
      if (pagesNumber != '' && pagesNumber > 0 ) { settingsArray.push(initializeExampleSettingsArray('readingTask', 4, pagesNumber)) };
  
      if (assignmentsNumberS != '' && assignmentsNumberS > 0 ) { settingsArray.push(initializeExampleSettingsArray('solvingTask', 1, assignmentsNumberS)) };
      if (testsNumber != '' && testsNumber > 0 ) { settingsArray.push(initializeExampleSettingsArray('solvingTask', 2, testsNumber)) };
      if (questionsNumber != '' && questionsNumber > 0 ) { settingsArray.push(initializeExampleSettingsArray('solvingTask', 3, testsNumber * 3, Math.floor(questionsNumber / 3))) };
  
      if (additionalTask1Number != '' && additionalTask1Number > 0 ) { settingsArray.push(initializeExampleSettingsArray('additionalTask', 1, additionalTask1Number)) };
      if (additionalTask2Number != '' && additionalTask2Number > 0 ) { settingsArray.push(initializeExampleSettingsArray('additionalTask', 2, additionalTask2Number)) };
      if (additionalTask3Number != '' && additionalTask3Number > 0 ) { settingsArray.push(initializeExampleSettingsArray('additionalTask', 3, additionalTask3Number)) };
      if (additionalTask4Number != '' && additionalTask4Number > 0 ) { settingsArray.push(initializeExampleSettingsArray('additionalTask', 4, additionalTask4Number)) };
  
      const additionalText = [additionalTask1Name, additionalTask2Name, additionalTask3Name, additionalTask4Name];
  
      createNewStudy(settingsArray, additionalText);
    }
    creatStudy();
  }, [theme]);

  //---------------------------------------------------------

  const setTimerPopup = (time, color) => {
    setTimerTime(time);
    setTimerButtonColor(color)
    setShowTimerPopup(true);
  }

  const handleStarSquareClicked = (time, color) => {
    // TO-DO: check if can mark star
    // if (studyData[taskKey].squares.length >= starNumber) {
    //   setTimerPopup(time, color);
    // } else {
    //   alert("can't click");
    // }
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
          <CourseDetails courseName={courseName} testDate={testDate}></CourseDetails>
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

export default Study;