import { Box, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Grow, Fade } from '@mui/material'
import Typewriter from 'typewriter-effect';

// Have the terminal window add elements to the background of the page

export default function Home() {
  const orangeGradient = "linear-gradient(to left, #de6262, #ffb88c)"
  const blueGradient = "linear-gradient(to left, #6CD4FF, #8B80F9)"
  const greenGradient = "linear-gradient(to left, #7BE0AD, #AEE5D8)"
  var [gradient, setGradient] = useState(orangeGradient)

  const [visible, setVisible] = useState(false)
  const [nameVisible, setNameVisible] = useState(false)
  const gradientStyle = { minWidth: 325, background: `${gradient}`, color: "primary", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "700", display: "flex", flexDirection: "row" }

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
          <Typography fontFamily={"Source Code Pro"} color={"primary"}>
            &gt;&nbsp; Hi, my name is
          </Typography>
          <Typography variant="h1" color={"text.primary"} sx={{ fontWeight: 600 }}>Andrew Neeley</Typography>
          <Typography variant="h1" color={"text.dimmest"} sx={{ minWidth: "585px", display: "flex", flexDirection: "row", fontSize: "3.1rem", marginTop: "12px" }}>I Build
            <div key={gradient} style={gradientStyle}>
              &nbsp;
              <Typewriter
                options={{ loop: false, delay: 50 }}
                onInit={(typewriter) => {
                  if (gradient == greenGradient) {
                    typewriter.typeString('Experiences').start();
                  }
                  else {
                    typewriter.pauseFor(gradient == orangeGradient ? 1000 : 500).typeString(gradient == orangeGradient ? 'Web Apps' : "Solutions").pauseFor(2500).deleteAll()
                      .callFunction(() => {
                        setGradient(gradient == orangeGradient ? blueGradient : greenGradient)
                      })
                      .start();
                  }
                }} />
            </div>
          </Typography>
        </Box>
      </Box>
    </>
  )
}
