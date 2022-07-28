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
      <div
        className="w-screen h-screen flex flex-col items-center justify-center">
        <div>
          <span className="font-term text-mint-900">
            &gt;&nbsp; Hi, my name is
          </span>
          <h1
          className="text-dynamicName">
            Andrew Neeley
          </h1>
          <h1
          className="text-dynamicSub min-w-dynamicSub flex flex-row text-slate-400">
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
          </h1>
        </div>
        <div className="mt-16 flex flex-col h-24 items-center justify-between text-sm">
          <ProfileLink href='https://www.github.com/aneeley05'>
            GITHUB&nbsp;
            <FontAwesomeIcon className="h-4" icon={faGithub} />{" "}
          </ProfileLink>
          <ProfileLink href='https://www.linkedin.com/in/aneeley'>
            LINKEDIN&nbsp;
            <FontAwesomeIcon
              className="h-4"
              icon={faLinkedin}
            />{" "}
          </ProfileLink>
        </div>
      </div>
    </>
  );
}
