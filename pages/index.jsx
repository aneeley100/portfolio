import { Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { Splash, Loading } from '../components'
import { useEffect, useState } from 'react'
import { Fade } from '@mui/material'

// Have the terminal window add elements to the background of the page

export default function Home() {
  const [visLayer1, setVisLayer1] = useState(false)
  const [visLayer2, setVisLayer2] = useState(false)

  return (
    <>
      <Splash l1={setVisLayer1} l2={setVisLayer2} />
      <Fade in={visLayer1}><Typography variant="h1">Andrew Neeley</Typography></Fade>
      <Fade in={visLayer2}><Typography variant="h1">I Build Experiences</Typography></Fade>
    </>
  )
}
