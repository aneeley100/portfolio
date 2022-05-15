import React from 'react';
import './App.css';
import { Stack, Typography, CssBaseline, Box } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import DarkTheme from './DarkTheme';
import { TitleTyper, HeadLinks, CustomFooter } from './CustomComponents';
var production = process.env.REACT_APP_PROD === "true";
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
              <TitleTyper enabled={production}/>
            </div>
            <Typography sx={{ pt: '1rem' }} variant='body2' color="secondary">I'm a software engineer that specializes in building and designing fantastic digital experiences.</Typography>
          </Stack>

          <CustomFooter />
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
