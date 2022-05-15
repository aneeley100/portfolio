import { createTheme } from '@mui/material';

const DarkTheme = createTheme({
    dark: true,
    typography: {
        h1: {
            fontFamily: 'DM Serif Display',
            fontSize: '4rem',
            fontWeight: '400',
            letterSpacing: '-0.0125em',
            lineHeight: '4rem',
        },
        fontFamily: [
            "DM Sans",
            "sans-serif"
        ].join(","),
    },
    palette: {
        mode: 'dark',
    }
})

export default DarkTheme;