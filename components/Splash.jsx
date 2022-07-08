import { Box, Typography, Fade } from "@mui/material"
import { useEffect, useState } from "react"

import dynamic from 'next/dynamic'
const Typewriter = dynamic(() => import("typewriter-effect"), {
    ssr: false,
});

export default ({ l1, l2 }) => {
    const [visible, setVisible] = useState(true)

    const [line1Complete, setLine1Complete] = useState(false)
    const [line2Complete, setLine2Complete] = useState(false)
    const [line3Complete, setLine3Complete] = useState(false)
    const [line4Complete, setLine4Complete] = useState(false)

    return (
        <Fade in={visible} timeout={{ enter: 300, exit: 300 }}>
            <Box backgroundColor={theme => theme.palette.background.terminal} sx={{ position: "absolute", left: "calc(50vw - 250px)", top: "calc(50vh - 150px)", width: "500px", height: "300px", p: "20px", borderRadius: "8px", boxShadow: "0 0 11px #ccd6f645" }}>
                {line1Complete ? "> start()" : <Typography color={theme => theme.palette.text.terminal} sx={{ display: "flex", flexDirection: "row" }}>
                &gt;&nbsp; <Typewriter options={{cursor: "_"}}
                        onInit={(typewriter) => {
                            typewriter.pauseFor(500).typeString('start()')
                                .pauseFor(200)
                                .callFunction(() => {
                                    setLine1Complete(true)
                                })
                                .start();}} />
                </Typography>}
            </Box>
        </Fade>
    )
}