import React from 'react';
import './App.css';

import { Stack, Typography, CssBaseline, Divider, GridClassKey, Grid, Box } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { ThemeProvider } from '@emotion/react';
import DarkTheme from './DarkTheme';
import TypeAnimation from 'react-type-animation';
import StarfieldAnimation from 'react-starfield-animation';

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans&family=DM+Serif+Display:ital@0;1&family=Roboto+Mono&family=Open+Sans&display=swap" rel="stylesheet" />
      </head>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <div className="CenterContent">
          <Stack spacing="min(3vw, 30px)">
            <Typography variant="h6" color="primary">Hi, my name is</Typography>
            <div>
              <Typography variant='h2' color="secondary.light" fontSize="clamp(40px, 8vw, 80px)">Andrew Neeley.</Typography>
              <Typography sx={{width: 'clamp(5px, 90vw, 700px)'}} variant='h2' color="secondary" fontSize="clamp(32px, 8vw, 80px)"><TypeAnimation className="TypeAnimation"
                sequence={['I Build ', 2000, 'I Build Web Apps.', 1500, 'I Build .', 500, 'I Build Solutions??', 500, 'I Build umm', 1000, 'I Build Experiences.']} cursor={false}/></Typography>
            </div>
            <Typography sx={{ pt: '1rem' }} variant='body2' color="secondary">I'm a software engineer that specializes in building and designing <br /> fantastic digital experiences.</Typography>
          </Stack>

          <footer>
            <Typography variant="caption">Built by Andrew Neeley</Typography>
          </footer>
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
