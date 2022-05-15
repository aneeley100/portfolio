import React from 'react';
import './App.css';

import { Stack, Typography, CssBaseline, Box } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import DarkTheme from './DarkTheme';
import { TitleTyper, HeadLinks } from './CustomComponents';

const animationsEnabled = false;

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <HeadLinks />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh">
        <div className="CenterContent">
          <Stack spacing="min(3vw, 30px)">
            <Typography variant="h6">Hi, my name is</Typography>
            <div>
              <Typography variant='h2' color="secondary.light" fontSize="clamp(40px, 10vw, 80px)">Andrew Neeley.</Typography>
              <TitleTyper enabled={animationsEnabled}/>
            </div>
            <Typography sx={{ pt: '1rem' }} variant='body2' color="secondary">I'm a software engineer that specializes in building and designing fantastic digital experiences.</Typography>
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
