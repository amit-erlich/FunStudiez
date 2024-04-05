import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Button, Container, Stepper, Step, Box, StepLabel, TextField, Grid } from '@mui/material';
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
        "Please fill the following details",
        "How many of the following would you like to read?",
        "How many of the following would you like to solve?",
        "You can add more tasks if you want"
    ];

    const [currentStep, setCurrentStep] = useState(0);
    const [settingsTitle, setSettingsTitle] = useState(steps[0]);
    const [settingsInstruction, setSettingsInstruction] = useState(instructions[0]);

    // State to hold the values of input fields
    const [courseName, setCourseName] = useState('');
    const [testDate, setTestDate] = useState('');

    const [presentationsNumber, setPresentationsNumber] = useState('');
    const [notebooksNumber, setNotebooksNumber] = useState('');
    const [assignmentsNumberR, setAssignmentsNumberR] = useState('');
    const [pagesNumber, setPagesNumber] = useState('');

    const [assignmentsNumberS, setAssignmentsNumberS] = useState('');
    const [testsNumber, setTestsNumber] = useState('');
    const [questionsNumber, setQuestionsNumber] = useState('');

    const [additionalTask1Name, setAdditionalTask1Name] = useState('');
    const [additionalTask1Number, setAdditionalTask1Number] = useState('');
    const [additionalTask2Name, setAdditionalTask2Name] = useState('');
    const [additionalTask2Number, setAdditionalTask2Number] = useState('');
    const [additionalTask3Name, setAdditionalTask3Name] = useState('');
    const [additionalTask3Number, setAdditionalTask3Number] = useState('');
    const [additionalTask4Name, setAdditionalTask4Name] = useState('');
    const [additionalTask4Number, setAdditionalTask4Number] = useState('');

    const [isQuestionsNumberDisabled, setIsQuestionsNumberDisabled] = useState(true);
    const [isAdditionalTask1NumberDisabled, setIsAdditionalTask1NumberDisabled] = useState(true);
    const [isAdditionalTask2NumberDisabled, setIsAdditionalTask2NumberDisabled] = useState(true);
    const [isAdditionalTask3NumberDisabled, setIsAdditionalTask3NumberDisabled] = useState(true);
    const [isAdditionalTask4NumberDisabled, setIsAdditionalTask4NumberDisabled] = useState(true);

    // Event handlers to update state when input values change
    const handleCourseNameChange = (event) => {
        setCourseName(event.target.value);
    };
    const handleTestDateChange = (event) => {
        setTestDate(event.target.value);
    };

    const handlePresentationsNumberChange = (event) => {
        setPresentationsNumber(event.target.value);
    };
    const handleNotebooksNumberChange = (event) => {
        setNotebooksNumber(event.target.value);
    };
    const handleAssignmentsNumberRChange = (event) => {
        setAssignmentsNumberR(event.target.value);
    };
    const handlePagesNumberChange = (event) => {
        setPagesNumber(event.target.value);
    };

    const handleAssignmentsNumberSChange = (event) => {
        setAssignmentsNumberS(event.target.value);
    };
    const handleTestsNumberChange = (event) => {
        setTestsNumber(event.target.value);
        setIsQuestionsNumberDisabled((event.target.value == '' || event.target.value == '0') ? true : false);
    };
    const handleQuestionsNumberChange = (event) => {
        setQuestionsNumber(event.target.value);
    };
    
    const handleAdditionalTask1NameChange = (event) => {
        setAdditionalTask1Name(event.target.value);
        setIsAdditionalTask1NumberDisabled((event.target.value == '') ? true : false);
    };
    const handleAdditionalTask1NumberChange = (event) => {
        setAdditionalTask1Number(event.target.value);
    };
    const handleAdditionalTask2NameChange = (event) => {
        setAdditionalTask2Name(event.target.value);
        setIsAdditionalTask2NumberDisabled((event.target.value == '') ? true : false);
    };
    const handleAdditionalTask2NumberChange = (event) => {
        setAdditionalTask2Number(event.target.value);
    };
    const handleAdditionalTask3NameChange = (event) => {
        setAdditionalTask3Name(event.target.value);
        setIsAdditionalTask3NumberDisabled((event.target.value == '') ? true : false);
    };
    const handleAdditionalTask3NumberChange = (event) => {
        setAdditionalTask3Number(event.target.value);
    };
    const handleAdditionalTask4NameChange = (event) => {
        setAdditionalTask4Name(event.target.value);
        setIsAdditionalTask4NumberDisabled((event.target.value == '') ? true : false);
    };
    const handleAdditionalTask4NumberChange = (event) => {
        setAdditionalTask4Number(event.target.value);
    };
    
    const navigate = useNavigate();
    const navigateStudy = () => {
        navigate('/Study', {
            state: { 
                isNewStudy: true,

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
                additionalTask4Number
            }
        });
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
            if (courseName == '' || testDate == '') {
                alert('Please enter the required details'); 
            } else {
                setCurrentStep(currentStep + 1);
                setSettingsTitle(steps[currentStep + 1]);
                setSettingsInstruction(instructions[currentStep + 1]);
            }
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
            <Box sx={{ width: '100%' }} style={{ position: 'absolute', top: '26%'}}>
                <Stepper activeStep={currentStep} alternativeLabel>
                    {steps.map((label) => (
                    <Step key={label}
                    sx={{
                        '& .MuiStepLabel-root .Mui-completed': {
                          color: theme.palette.green, // circle color (COMPLETED)
                        },
                        '& .MuiStepLabel-root .Mui-active': {
                          color: theme.palette.green, // circle color (ACTIVE)
                        },
                        '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                          {
                            color: theme.palette.green, // Just text label (ACTIVE)
                          },
                      }}>
                        <StepLabel></StepLabel>
                    </Step>
                    ))}
                </Stepper>
            </Box>
            <Container maxWidth="md" style={{ position: 'absolute', top: '34%' }}>
                <Grid item xs={12}>
                    <p style={{ fontSize: '150%', fontWeight: 'bold', padding: '0px', margin: '0px' }}>
                    {settingsTitle}
                    </p>
                    <p style={{ fontSize: '110%', paddingBottom: '5%', margin: '0px' }}>
                    {settingsInstruction}
                    </p>
                </Grid>
                {(currentStep == 0) &&
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12}>
                            <TextField
                                required
                                style={{ width: '50%' }}
                                label="Course name"
                                value={courseName}
                                onChange={handleCourseNameChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                style={{ width: '50%' }}
                                label="Test date"
                                type="date"
                                value={testDate}
                                onChange={handleTestDateChange}
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                    </Grid>
                }
                {(currentStep == 1) &&
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Number of Presentations"
                                type='number'
                                value={presentationsNumber}
                                onChange={handlePresentationsNumberChange}
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Number of Notebooks"
                                type='number'
                                value={notebooksNumber}
                                onChange={handleNotebooksNumberChange}
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Number of Assignments"
                                type='number'
                                value={assignmentsNumberR}
                                onChange={handleAssignmentsNumberRChange}
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Number of Pages in Book"
                                type='number'
                                value={pagesNumber}
                                onChange={handlePagesNumberChange}
                                size="small"
                            />
                        </Grid>
                    </Grid>
                }
                {(currentStep == 2) &&
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Number of Assignments"
                                type='number'
                                value={assignmentsNumberS}
                                onChange={handleAssignmentsNumberSChange}
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                
                                label="Number of Tests"
                                type='number'
                                value={testsNumber}
                                onChange={handleTestsNumberChange}
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                disabled={isQuestionsNumberDisabled}
                                label="Questions in a test"
                                type='number'
                                value={isQuestionsNumberDisabled ? '' : questionsNumber}
                                onChange={handleQuestionsNumberChange}
                                size="small"
                            />
                        </Grid>
                    </Grid>
                }
                {(currentStep == 3) &&
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Additional task"
                                value={additionalTask1Name}
                                onChange={handleAdditionalTask1NameChange}
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                disabled={isAdditionalTask1NumberDisabled}
                                label="Number"
                                type='number'
                                value={isAdditionalTask1NumberDisabled ? '' : additionalTask1Number}
                                onChange={handleAdditionalTask1NumberChange}
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Additional task"
                                value={additionalTask2Name}
                                onChange={handleAdditionalTask2NameChange}
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                disabled={isAdditionalTask2NumberDisabled}
                                label="Number"
                                type='number'
                                value={isAdditionalTask2NumberDisabled ? '' : additionalTask2Number}
                                onChange={handleAdditionalTask2NumberChange}
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Additional task"
                                value={additionalTask3Name}
                                onChange={handleAdditionalTask3NameChange}
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                disabled={isAdditionalTask3NumberDisabled}
                                label="Number"
                                type='number'
                                value={isAdditionalTask3NumberDisabled ? '' : additionalTask3Number}
                                onChange={handleAdditionalTask3NumberChange}
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Additional task"
                                value={additionalTask4Name}
                                onChange={handleAdditionalTask4NameChange}
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                disabled={isAdditionalTask4NumberDisabled}
                                label="Number"
                                type='number'
                                value={isAdditionalTask4NumberDisabled ? '' : additionalTask4Number}
                                onChange={handleAdditionalTask4NumberChange}
                                size="small"
                            />
                        </Grid>
                    </Grid>
                }
            </Container>
            <Container style={{ padding: '2%' }}>
                {(currentStep != 0) &&
                <Button variant="contained" 
                    style={{ 
                    backgroundColor: theme.palette.white, 
                    color: theme.palette.black,
                    fontWeight: 'bold',
                    fontSize: '60%',
                    fontFamily: 'cursive',
                    marginRight: '2%' }}
                    onClick={stepBack}>
                    Back
                </Button>}
                <Button variant="contained" 
                    style={{ 
                    backgroundColor: theme.palette.white, 
                    color: theme.palette.black,
                    fontWeight: 'bold',
                    fontSize: '60%',
                    fontFamily: 'cursive' }}
                    onClick={NextStep}>
                    {currentStep == 3 ? 'Let’s start! ': 'Next'}
                </Button>
            </Container>
        </header>
    </div>
  );
}

export default NewStudySettings;
