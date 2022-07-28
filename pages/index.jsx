import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import Typewriter from "typewriter-effect";

import {
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ProfileLink } from "../components";

// Have the terminal window add elements to the background of the page

export default function Home() {
  const orangeGradient = "linear-gradient(to left, #de6262, #ffb88c)";
  const blueGradient = "linear-gradient(to left, #6CD4FF, #8B80F9)";
  const greenGradient = "linear-gradient(to left, #2adedf, #2fe382)";
  var [gradient, setGradient] = useState(orangeGradient);

  const gradientStyle = {
    background: `${gradient}`,
    color: "primary",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "700",
    display: "flex",
    flexDirection: "row",
  };

  return (
    <>
      <Box
        className="w-screen h-screen flex flex-col items-center justify-center">
        <Box>
          <Typography
            fontFamily={"Source Code Pro"}
            color={"primary"}>
            &gt;&nbsp; Hi, my name is
          </Typography>
          <Typography
            variant='h1'
            color={"text.primary"}
            sx={{ fontWeight: 600, fontSize: "min(4rem, 11.5vw)" }}>
            Andrew Neeley
          </Typography>
          <Typography
            variant='h1'
            color={"text.dimmest"}
            sx={{
              minWidth: "min(520px, 95vw)",
              display: "flex",
              flexDirection: "row",
              fontSize: "min(3.1rem, 9vw)",
              marginTop: "12px",
            }}>
            I Build
            <div key={gradient} style={gradientStyle}>
              &nbsp;
              <Typewriter
                options={{ loop: false, delay: 50, cursor: "" }}
                onInit={(typewriter) => {
                  if (gradient == greenGradient) {
                    typewriter
                      .typeString("Experiences")
                      .callFunction(() => {
                        //setFallIn(true)
                      })
                      .start();
                  } else {
                    typewriter
                      .pauseFor(gradient == orangeGradient ? 1000 : 500)
                      .typeString(
                        gradient == orangeGradient ? "Web Apps" : "Solutions"
                      )
                      .pauseFor(2500)
                      .deleteAll()
                      .callFunction(() => {
                        setGradient(
                          gradient == orangeGradient
                            ? blueGradient
                            : greenGradient
                        );
                      })
                      .start();
                  }
                }}
              />

            </div>
          </Typography>
        </Box>
        <Box className="mt-16 flex flex-col h-28 items-center justify-between">
          <ProfileLink href='https://www.github.com/aneeley05'>
            Github&nbsp;
            <FontAwesomeIcon className="h-4" icon={faGithub} />{" "}
          </ProfileLink>
          <ProfileLink href='https://www.linkedin.com/in/aneeley'>
            LinkedIn&nbsp;
            <FontAwesomeIcon
              className="h-4"
              icon={faLinkedin}
            />{" "}
          </ProfileLink>
        </Box>
      </Box>
    </>
  );
}
