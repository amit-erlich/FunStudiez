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
            starGap: 1
        },
        task2: {
            text: 'notebook',
            color: 'lightPurple',
            starGap: 3
        },
        task3: {
            text: 'assignment',
            color: 'darkBlue',
            starGap: 3
        },
        task4: {
            text: 'marathon',
            color: 'green',
            starGap: 2
        },
        task5: {
            text: 'up to page',
            color: 'lightBlue',
            starGap: 50
        },
    },
    solvingTask: {
        task1: {
            text: 'assignment',
            color: 'blueGreen',
            starGap: 1
        },
        task2: {
            text: 'test',
            color: 'orange',
            starGap: 1
        },
        task3: {
            text: 'test questions',
            color: 'yellow',
            starGap: 2
        },
    },
    additionalTask: {
        task1: {
            text: '',
            color: 'red',
            starGap: 2
        },
        task2: {
            text: '',
            color: 'purple',
            starGap: 2
        },
        task3: {
            text: '',
            color: 'gray',
            starGap: 2
        },
    },
});

export default theme;