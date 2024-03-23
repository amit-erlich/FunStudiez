import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Button, Container, Stepper, Step, Box, StepLabel } from '@mui/material';
import AppMainBar from '../components/AppMainBar';

function NewStudySettings() {
    const theme = useTheme();

    const steps = [
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

    const [currentStep, setCurrentStep] = useState(0);
    const [settingsTitle, setSettingsTitle] = useState(steps[0]);
    const [settingsInstruction, setSettingsInstruction] = useState(instructions[0]);
    
    const navigate = useNavigate();
    const navigateStudy = () => {
        navigate('/Study');
    };
    const stepBack = () => {
        setCurrentStep(currentStep - 1);
        setSettingsTitle(steps[currentStep - 1]);
        setSettingsInstruction(instructions[currentStep - 1]);
    };
    const NextStep = () => {
        if (currentStep + 1 == 4) {
            navigateStudy();
        } else {
            setCurrentStep(currentStep + 1);
            setSettingsTitle(steps[currentStep + 1]);
            setSettingsInstruction(instructions[currentStep + 1]);
        }
    };

  return (
    <div className="App">
        <header className="App-header">
            <AppMainBar/>
            <div style={{ position: 'absolute', top: '5%' }}>
                <p style={{ fontSize: '200%', fontWeight: 'bold' }}>
                Set your new study goals
                </p>
            </div>
            <Box sx={{ width: '100%' }} style={{ position: 'absolute', top: '30%'}}>
                <Stepper activeStep={currentStep} alternativeLabel>
                    {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                    ))}
                </Stepper>
            </Box>
            <div style={{ position: 'absolute', top: '45%'}}>
                <div>
                    <p style={{ fontSize: '150%', fontWeight: 'bold', padding: '0px', margin: '0px' }}>
                    {settingsTitle}
                    </p>
                    <p style={{ fontSize: '110%', padding: '0px', margin: '0px' }}>
                    {settingsInstruction}
                    </p>
                </div>
                <div>
                    {(currentStep == 0) &&
                    <p style={{ fontSize: '110%', padding: '0px', margin: '0px' }}>
                    stage 1
                    </p>
                    }
                    {(currentStep == 1) &&
                    <p style={{ fontSize: '110%', padding: '0px', margin: '0px' }}>
                    stage 2
                    </p>
                    }
                    {(currentStep == 2) &&
                    <p style={{ fontSize: '110%', padding: '0px', margin: '0px' }}>
                    stage 3
                    </p>
                    }
                    {(currentStep == 3) &&
                    <p style={{ fontSize: '110%', padding: '0px', margin: '0px' }}>
                    stage 4
                    </p>
                    }
                </div>
            </div>
            <Container style={{ padding: '2%' }}>
                {(currentStep != 0) &&
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
                </Button>}
                <Button variant="contained" 
                    style={{ 
                    backgroundColor: theme.palette.white, 
                    color: theme.palette.black,
                    fontWeight: 'bold',
                    fontSize: '60%',
                    fontFamily: 'cursive',
                    marginLeft: '1%' }}
                    onClick={NextStep}>
                    {currentStep == 3 ? 'Let’s start! ': 'Next'}
                </Button>
            </Container>
        </header>
    </div>
  );
}

export default NewStudySettings;
