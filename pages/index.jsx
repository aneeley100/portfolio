import { Box, Button, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Grow, Fade } from '@mui/material'
import Typewriter from 'typewriter-effect';
import { useRouter } from 'next/router';

import styles from "../styles/index.module.css"

// Have the terminal window add elements to the background of the page

export default function Home() {
  const orangeGradient = "linear-gradient(to left, #de6262, #ffb88c)"
  const blueGradient = "linear-gradient(to left, #6CD4FF, #8B80F9)"
  const greenGradient = "linear-gradient(to left, #2adedf, #2fe382)"
  var [gradient, setGradient] = useState(orangeGradient)

  const [visible, setVisible] = useState(false)
  const [nameVisible, setNameVisible] = useState(false)
  const gradientStyle = { background: `${gradient}`, color: "primary", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "700", display: "flex", flexDirection: "row" }

  const [fallIn, setFallIn] = useState(false)

  const [driftOut, setDriftOut] = useState(false)

  const router = useRouter();

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

  useEffect(() => {
    setTimeout(() => {
      router.push("/portfolio")
    }, 500)
  }, driftOut)

  return (
    <>
      <Box className={driftOut ? styles.bodyContainer + " " + styles.driftOut : fallIn ? styles.bodyContainer + " " + styles.loaded : styles.bodyContainer}>
        <Box>
          <Typography fontFamily={"Source Code Pro"} color={"primary"} className={`${styles.termText} ${fallIn && styles.loaded}`}>
            &gt;&nbsp; Hi, my name is
          </Typography>
          <Typography variant="h1" color={"text.primary"} sx={{ fontWeight: 600, fontSize: "min(4rem, 11.5vw)" }}>Andrew Neeley</Typography>
          <Typography variant="h1" color={"text.dimmest"} sx={{ minWidth: "min(585px, 95vw)", display: "flex", flexDirection: "row", fontSize: "min(3.1rem, 9vw)", marginTop: "12px" }}>I Build
            <div key={gradient} style={gradientStyle}>
              &nbsp;
              {fallIn ? "Experiences" : <Typewriter
                options={{ loop: false, delay: 50 }}
                onInit={(typewriter) => {
                  if (gradient == greenGradient) {
                    typewriter.typeString('Experiences').callFunction(() => {
                      setFallIn(true)
                    }).start();
                  }
                  else {
                    typewriter.pauseFor(gradient == orangeGradient ? 1000 : 500).typeString(gradient == orangeGradient ? 'Web Apps' : "Solutions").pauseFor(2500).deleteAll()
                      .callFunction(() => {
                        setGradient(gradient == orangeGradient ? blueGradient : greenGradient)
                      })
                      .start();
                  }
                }} />}
            </div>
          </Typography>
        </Box>
        <Box>
          <Button onClick={() => setDriftOut(true)}>
            Drift Out
          </Button>
        </Box>
      </Box>
    </>
  )
}
