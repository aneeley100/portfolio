import { Box, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Grow, Fade } from '@mui/material'
import Typewriter from 'typewriter-effect'

// Have the terminal window add elements to the background of the page

export default function Home() {
  const [visible, setVisible] = useState(false)
  const [nameVisible, setNameVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setNameVisible(true)
    }
      , 6500)
  }, [])
  useEffect(() => {
    setTimeout(() => {
      setVisible(true)
    }
      , 7500)
  }, [])

  return (
    <>
      <Box sx={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Box>
          <Typography class="terminaltext" fontFamily={"Source Code Pro"}>
            &gt;&nbsp;<Typewriter options={{ cursor: "", delay: 50 }}
              onInit={(typewriter) => {
                typewriter.pauseFor(2500).typeString('Hi').pauseFor(2000).typeString(", my name is ").start();
              }} />
          </Typography>
          <Grow
            in={nameVisible}
            style={{ transformOrigin: '0 0 0' }}
            {...(nameVisible ? { timeout: 1000 } : {})}
          ><Typography variant="h1">Andrew Neeley</Typography></Grow>
          <Fade timeout={{ enter: 800, exit: 300 }}
            in={visible}
          ><Typography variant="h1" color={theme => { theme.palette.text.dim }}>I Build Experiences</Typography></Fade>
        </Box>
      </Box>
    </>
  )
}
