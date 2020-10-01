import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useSpring, animated, useTransition } from 'react-spring'



const About = () => {
    const [showElements, setShowElements] = useState(false);
    const showSection = () => {
        if (window.scrollY >= 100) {
            setShowElements(true)
        };
    }
    const pictureTransition = useTransition(showElements, null, {
        from: { opacity: 0, transform: "scale(0.7)" },
        enter: { opacity: 1, transform: "scale(1)" },
        config: { duration: 500 }
    })
    const textTransition = useTransition(showElements, null, {
        from: { opacity: 0, transform: 'translateX(-40%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        config: { duration: 600 }
    })

    window.addEventListener('scroll', showSection);
    return (
        <section id="about" className="bg-blue-100 p-5">
            <h1 style={{ fontFamily: "'Righteous', cursive" }} className="text-4xl md:text-5xl text-center p-5">About me</h1>
            <div className="container mx-auto bg-gray-200 flex flex-wrap p-5 border">
                {
                    pictureTransition.map(({ item, key, props }) =>
                        item && <animated.div
                            key={key}
                            style={props}
                            className={showElements ? "lg:w-2/5 p-5 md:border-r  ml-auto" : "hidden"}
                        >
                            <img src={require('../Components/Images/me.jpg')} alt="Me" />
                        </animated.div>)
                }
                {
                    textTransition.map(({ item, key, props }) =>
                        item &&
                        <animated.div
                            key={key}
                            style={props}
                            className={showElements ? "lg:w-2/5 p-5 text-center mr-auto" : "hidden"}>
                            <h2 style={{ fontFamily: "'Frank Ruhl Libre', serif" }} className="text-2xl border-t md:border-none text-left p-2">Junior Web-Developer</h2>
                            <p style={{ fontFamily: "'EB Garamond', serif" }} className="p-2 border-b text-justify sm:text-base md:text-lg">
                                My name is Klaudijus Kamarauskas and I'm a junior web-developer.
                    In 2020 I studied full-stack web-developing at <a className="text-blue-500 hover:underline" href="https://bit.lt/">Baltic Institute of Technology</a> for 5.5 months.
                    Over the course I've gained basic knowledge of few languages and advanced knowledge in <b>php</b>.<br />
                    I enjoy problem-solving, digging for information, making things <b>move</b> and making things <b>work</b>.<br />
                    I'm a gamer, and what gaming taught me is that <b>the best loot is only achievable by doing the hardest content</b>, and for that
                    you have to invest a huge amount of time. Thankfully I enjoy working hard and reaching that goal and getting my hands on that <b>loot</b>.
                    </p>
                            <p className="p-2 text-center">
                                <a className="text-blue-400 hover:text-blue-500 p-1" target="_blank" href="https://www.linkedin.com/in/klaudijus-kamarauskas-b669831a6/">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a className="text-blue-400 hover:text-blue-500 p-1" target="_blank" href="https://www.facebook.com/claud.hatake">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a className="text-blue-400 hover:text-blue-500 p-2" target="_blank" href="https://github.com/Klaudijus1996?tab=repositories">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </p>
                            <br />
                            <a style={{ transition: "0.3s" }} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" href={require("../Components/Files/Resume-Klaudijus.pdf")} download="Resume-Klaudijus">Download CV</a>
                        </animated.div>
                    )
                }
            </div>
        </section>
    )
}

export default About
