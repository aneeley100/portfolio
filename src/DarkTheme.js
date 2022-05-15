import { ThemeContext } from '@emotion/react';
import { createTheme } from '@mui/material';

const DarkTheme = createTheme({
    dark: true,
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

DarkTheme.typography = {
    h2: {
        fontFamily: 'DM Serif Display',
        fontSize: '4.4rem',
        fontWeight: '400',
    },
    h6: {
        fontFamily: 'Roboto Mono',
        fontSize: '1.1rem',
        fontWeight: '400',
        color: DarkTheme.palette.primary.main
    },
    body2: {
        fontSize: '1.1rem',
        fontFamily: 'DM Sans',
    },
    caption: {
        fontSize: '0.9rem',
        color: DarkTheme.palette.secondary.main,
        opacity: 0.35,
        fontWeight: 'bold',
        fontFamily: "DM Sans"
    },
    fontFamily: [
        "DM Sans",
        "sans-serif"
    ].join(","),
}

export default DarkTheme;