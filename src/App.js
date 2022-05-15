import React from 'react';
import './App.css';

import { Stack, Typography, CssBaseline, Divider, GridClassKey, Grid, Box } from '@mui/material';
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
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans&family=DM+Serif+Display:ital@0;1&family=Roboto+Mono&display=swap" rel="stylesheet" />
      </head>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <div className="CenterContent">
          <div className='Hero'>
            <Stack spacing="2rem">
              <Typography variant="h6" color="primary">Hi, my name is</Typography>
              <Typography variant='h1' color="secondary.light">Not Your Everyday<br />Web Developer</Typography>
              <Typography variant='body1' color="secondary">I'm a software engineer that specializes in building<br />and designing fantastic digital experiences.</Typography>
            </Stack>
          </div>
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
