import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Button, Container, Stepper } from '@mui/material';
import AppMainBar from '../components/AppMainBar';

function NewStudySettings() {
    const theme = useTheme();

    const titles = [
        "Course details",
        "Reading tasks",
        "Solving tasks",
        "Additional tasks"
        ];
    const instructions = [
        "",
        "How many of the following would you like to read?",
        "How many of the following would you like to solve?",
        "You can add more tasks if you want"
    ];

    const [currentStage, setCurrentStage] = useState(0);
    const [settingsTitle, setSettingsTitle] = useState(titles[0]);
    const [settingsInstruction, setSettingsInstruction] = useState(instructions[0]);
    
    const navigate = useNavigate();
    const navigateStudy = () => {
        navigate('/Study');
    };
    const stepBack = () => {
        setCurrentStage(currentStage - 1);
        setSettingsTitle(titles[currentStage - 1]);
        setSettingsInstruction(instructions[currentStage - 1]);
    };
    const NextStep = () => {
        if (currentStage + 1 == 4) {
            navigateStudy();
        } else {
            setCurrentStage(currentStage + 1);
            setSettingsTitle(titles[currentStage + 1]);
            setSettingsInstruction(instructions[currentStage + 1]);
        }
    };

  return (
    <div className="App">
        <header className="App-header">
            <AppMainBar/>
            <p style={{ textAlign: 'left', fontSize: '300%', fontWeight: 'bold', padding: '0px', margin: '0px' }}>
            Set your new study goals
            </p>
            <Stepper></Stepper>
            <div>
                <p style={{ textAlign: 'left', fontSize: '150%', fontWeight: 'bold', padding: '0px', margin: '0px' }}>
                {settingsTitle}
                </p>
                <p style={{ textAlign: 'left', fontSize: '110%', padding: '0px', margin: '0px' }}>
                {settingsInstruction}
                </p>
            </div>
            <div>
                {(currentStage == 0) &&
                <p style={{ textAlign: 'left', fontSize: '110%', padding: '0px', margin: '0px' }}>
                stage 1
                </p>
                }
                {(currentStage == 1) &&
                <p style={{ textAlign: 'left', fontSize: '110%', padding: '0px', margin: '0px' }}>
                stage 2
                </p>
                }
                {(currentStage == 2) &&
                <p style={{ textAlign: 'left', fontSize: '110%', padding: '0px', margin: '0px' }}>
                stage 3
                </p>
                }
                {(currentStage == 3) &&
                <p style={{ textAlign: 'left', fontSize: '110%', padding: '0px', margin: '0px' }}>
                stage 4
                </p>
                }
            </div>
            <Container style={{ padding: '2%' }}>
                <Button variant="contained" 
                    style={{ 
                    backgroundColor: theme.palette.white, 
                    color: theme.palette.black,
                    fontWeight: 'bold',
                    fontSize: '60%',
                    fontFamily: 'cursive',
                    marginRight: '1%' }}
                    onClick={stepBack}>
                    Back
                </Button>
                <Button variant="contained" 
                    style={{ 
                    backgroundColor: theme.palette.white, 
                    color: theme.palette.black,
                    fontWeight: 'bold',
                    fontSize: '60%',
                    fontFamily: 'cursive',
                    marginLeft: '1%' }}
                    onClick={NextStep}>
                    Next
                </Button>
            </Container>
        </header>
    </div>
  );
}

export default NewStudySettings;
