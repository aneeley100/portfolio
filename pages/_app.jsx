import { CssBaseline, ThemeProvider } from '@mui/material'
import '../styles/globals.css'
import { useState, useEffect } from 'react'
import { createTheme } from '@mui/material'

function MyApp({ Component, pageProps }) {
  const mainTheme = createTheme({
    typography: {
      fontFamily: '"Source Code Pro", monospace',
      h1: {
        fontSize: '4rem',
        fontWeight: '400',
        letterSpacing: '0px',
        fontFamily: '"DM Serif Display", serif',
      },
    },
    palette: {
      primary: {
        main: '#64ffda'
      },
      secondary: {
        main: '#57cbff',
        pink: '#f57dff'
      },
      text: {
        primary: '#ccd6f6',
        dim: '#a8b2d1',
        dimmest: '#8892b0',
      },
      background: {
        default: '#0a192f',
        light: '#112240',
        lightest: '#233554',
        dark: '#020c1b',
        terminal: '#00000061',
      }
    },
  });

  const startTheme = createTheme({
    palette: {
      primary: {
        main: '#000'
      },
      text: {
        terminal: '#fff'
      },
      background: {
        default: '#fff',
        terminal: '#000'
      }
    },
  });

  const [activeTheme, setActiveTheme] = useState(mainTheme)

  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Serif+Display&family=Source+Code+Pro:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
