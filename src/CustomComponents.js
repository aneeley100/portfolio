import React from 'react';
import './App.css';

import { Typography } from '@mui/material';
import TypeAnimation from 'react-type-animation';

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
            <Typography sx={{ width: 'clamp(5px, 90vw, 725px)' }} variant='h2' color="secondary" fontSize="clamp(40px, 8vw, 80px)">I Build Experiences.</Typography>
        );
    } else {
        return (
            <Typography sx={{ width: 'clamp(5px, 90vw, 725px)' }} variant='h2' color="secondary" fontSize="clamp(32px, 8vw, 80px)">
                <TypeAnimation className="TypeAnimation"
                    sequence={['I Build ', 2000, 'I Build Web Apps.', 1500, 'I Build .', 500, 'I Build Solutions??', 500, 'I Build umm', 1000, 'I Build Experiences.']} cursor={false} />
            </Typography>
        );
    }
}

export { TitleTyper, HeadLinks };