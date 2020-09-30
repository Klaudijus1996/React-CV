import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useSpring, animated, useTransition } from 'react-spring'
import BubblesParticles from '../Components/BubblesParticles.js';




const Heading = () => {
    const [transitionDone, setTransitionDone] = useState(false);
    setTimeout(function () { setTransitionDone(true); }, 1700);
    const showBG = useSpring({ config: { duration: 1500 }, delay: 200, opacity: 1, from: { opacity: 0 } })
    const showGreetingMain = useSpring({ config: { duration: 1000 }, delay: 800, opacity: 1, from: { opacity: 0 } })
    const showGreetingSub = useSpring({ config: { duration: 1500 }, delay: 1700, opacity: 1, from: { opacity: 0 } })
    return (
        <animated.div style={showBG} id="top" className="w-full ram-bg bg-cover bg-center">
            <BubblesParticles />
            <div className="z-10 flex content-center flex-wrap w-full bg-gray-800 bg-opacity-25 min-h-full">
                <div className="w-full" style={{
                    height: 'fit-content',
                    fontFamily: "'Righteous', cursive"
                }}>
                    <animated.h1
                        className="text-4xl md:text-6xl text-white w-full text-center"
                        style={showGreetingMain}
                    >Hello</animated.h1>
                </div>
                <div style={{ fontFamily: "'Frank Ruhl Libre', serif" }} className={transitionDone ? "cd-intro w-full text-white" : "hidden"}>
                    <animated.h1 style={showGreetingSub} className="text-3xl md:text-5xl text-center cd-headline clip">
                        <span className="blc">I am &nbsp;</span>
                        <span className="cd-words-wrapper">
                            <b className="is-visible">Klaudijus Kamarauskas</b>
                            <b>Developer</b>
                        </span>
                    </animated.h1>
                </div>
            </div>
            <div style={{ right: "1%", bottom: "0%", transition: "0.3s" }} className="absolute  opacity-50 flex items-center">
                <p className="text-white cursor-default" >Photo artist:&nbsp;</p>
                <a className="text-2xl text-purple-500 hover:text-gray-100" target="_blank" href="https://www.instagram.com/ram1ntacho/"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
        </animated.div>
    )
}

export default Heading
