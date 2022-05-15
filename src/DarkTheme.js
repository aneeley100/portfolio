import { createTheme, createMuiTheme } from '@mui/material';
const { palette } = createMuiTheme();
const DarkTheme = createTheme({
    dark: true,
    typography: {
        h1: {
            fontFamily: 'DM Serif Display',
            fontSize: '4.4rem',
            fontWeight: 'bold',
            lineHeight: '3rem',
        },
        h2: {
            fontFamily: 'DM Serif Display',
            fontSize: '4.4rem',
            fontWeight: '400',
            lineHeight: '3.2rem',
        },
        h6: {
            fontFamily: 'Roboto Mono',
            fontSize: '1.1rem',
            fontWeight: '400',
        },
        body2: {
            fontSize: '1.1rem',
        },
        fontFamily: [
            "DM Sans",
            "sans-serif"
        ].join(","),
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#64ffda',
        },
        secondary: {
            main: '#8892b0',
            light: '#ccd6f6',
        },
        background: {
                default: '#0a192f',
                dark: '#020c1b',
                light: '#112240',
                ligtest: '#233554',
        }
    }
})

export default DarkTheme;