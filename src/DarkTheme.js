import { createTheme } from '@mui/material';

const DarkTheme = createTheme({
    dark: true,
    colors: {
        devAlert: '#ffa500',
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#64ffda',
            dim: '#8892b0a3',
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
        lineHeight: '1.15',
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
        lineHeight: '1.5',
    },
    caption: {
        fontSize: '0.9rem',
        color: DarkTheme.palette.secondary.main,
        fontWeight: 'bold',
        fontFamily: "DM Sans"
    },
    fontFamily: [
        "DM Sans",
        "sans-serif"
    ].join(","),
}

export default DarkTheme;