import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        black: '#000000',
        gray: '#515C5D',
        white: '#FFFFFF',
        darkBlue: '#444FAD',
        lightBlue: '#14C7DE',
        blueGreen: '#19B092',
        green: '#2FDA77',
        yellow: '#F1C40F',
        orange: '#FA9D00',
        red: '#B51515',
        pink: '#E26A6A',
        lightPurple: '#B09CFF',
        purple: '#622C90',
    },
    readingTask: {
        task1: {
            text: 'presentation',
            color: 'pink',
        },
        task2: {
            text: 'notebook',
            color: 'lightPurple',
        },
        task3: {
            text: 'assignment',
            color: 'darkBlue',
        },
        task4: {
            text: 'marathon',
            color: 'green',
        },
        task5: {
            text: 'up to page',
            color: 'lightBlue',
        },
    },
    solvingTask: {
        task1: {
            text: 'assignment',
            color: 'blueGreen',
        },
        task2: {
            text: 'test',
            color: 'orange',
        },
        task3: {
            text: 'test questions',
            color: 'yellow',
        },
    },
    additionalTask: {
        task1: {
            text: '',
            color: 'red',
        },
        task2: {
            text: '',
            color: 'purple',
        },
        task3: {
            text: '',
            color: 'gray',
        },
    },
});

export default theme;