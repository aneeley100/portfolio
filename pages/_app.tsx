import '../styles/globals.css'
import { useState, useEffect } from 'react'
import { Foot } from '../components'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  // const mainTheme = createTheme({
  //   typography: {
  //     fontFamily: '"Source Code Pro", monospace',
  //     h1: {
  //       fontSize: '4rem',
  //       fontWeight: '600',
  //       letterSpacing: '0px',
  //       fontFamily: '"Montserrat", sans',
  //     },
  //   },
  //   palette: {
  //     primary: {
  //       main: '#64ffda'
  //     },
  //     secondary: {
  //       main: '#57cbff',
  //       pink: '#f57dff'
  //     },
  //     text: {
  //       primary: '#ccd6f6',
  //       dim: '#a8b2d1',
  //       dimmest: '#8892b0',
  //     },
  //     background: {
  //       default: '#0a192f',
  //       light: '#112240',
  //       lightest: '#233554',
  //       dark: '#020c1b',
  //       terminal: '#00000061',
  //     }
  //   },
  // });

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Andrew Neeley | Portfolio</title>
      </Head>
      <Foot />
      <Component {...pageProps} />
    </>
  )
}
