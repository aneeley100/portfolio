import React from 'react';
import './App.css';

import DarkTheme from './DarkTheme';
import { Typography, Stack } from '@mui/material';
import TypeAnimation from 'react-type-animation';
import { ThemeContext } from '@emotion/react';

function HeadLinks() {
    return (
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans&family=DM+Serif+Display:ital@0;1&family=Roboto+Mono&family=Open+Sans&display=swap" rel="stylesheet" />
        </head>
    )
}

function TitleTyper(props) {
    const enabled = props.enabled;
    if (!enabled) {
        return (
            <Typography sx={{ width: 'clamp(5px, 90vw, 725px)' }} variant='h2' color="secondary" fontSize="clamp(32px, 8vw, 80px)">I Build Experiences.</Typography>
        );
    } else {
        return (
            <Typography sx={{ width: 'clamp(5px, 90vw, 725px)' }} variant='h2' color="secondary" fontSize="clamp(32px, 8vw, 80px)">
                <TypeAnimation className="TypeAnimation"
                    sequence={['I Build ', 2000, 'I Build Web Apps.', 1500, 'I Build Solutions.', 1500, 'I Build Experiences.']} cursor={false} />
            </Typography>
        );
    }
}

function CustomFooter() {
    const production = process.env.REACT_APP_PROD === "true";
    if (!production) {
        return (
            <footer>
                <Stack>
                    <Typography variant="caption" color={DarkTheme.palette.primary.dim + "4f"}>Built by Andrew Neeley.</Typography>
                    <Typography variant="caption" color={DarkTheme.palette.primary.dim}>(Developer Mode)</Typography>
                </Stack>
            </footer>
        )
    } else {
        return (
            <footer>
                <Typography variant="caption">Built by Andrew Neeley</Typography>
            </footer>
        )
    }
}

export { TitleTyper, HeadLinks, CustomFooter };