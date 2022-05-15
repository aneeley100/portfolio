import React from 'react';
import './App.css';

import { Stack, Typography, CssBaseline, Divider, Link } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { ThemeProvider } from '@emotion/react';
import DarkTheme from './DarkTheme';

import StarfieldAnimation from 'react-starfield-animation';

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet" />
      </head>
      <div className="App">
        <div className="CenterContent">
          <div className='Hero'>
            <Stack spacing="2rem">
              <Typography variant='h1'>Not Your Everyday<br />Web Developer</Typography>
              <Typography variant='body1'>I'm a software engineer that specializes in building<br/>and designing fantastic digital experiences.</Typography>
            </Stack>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
