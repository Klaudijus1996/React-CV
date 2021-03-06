import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faHtml5, faJava, faJs, faLaravel, faPhp, faReact } from '@fortawesome/free-brands-svg-icons';
import { animated, useTransition } from 'react-spring'


const Skills = () => {
    const [showElements, setShowElements] = useState(false);
    const showSection = () => {
        if (window.scrollY >= 1100) {
            setShowElements(true)
        };
    }
    const boxTransition = useTransition(showElements, null, {
        from: { opacity: 0, transform: 'scale(0.6)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        config: { duration: 500 }
    })
    window.addEventListener('scroll', showSection);
    return (
        <section id="skills" className="bg-gray-100 p-5">
            <h1 style={{ fontFamily: "'Righteous', cursive" }} className="text-4xl md:text-5xl text-center p-5">Skills</h1>
            <div className="container mx-auto sm:flex sm:flex-wrap sm:justify-between">
                {
                    boxTransition.map(({ item, key, props }) =>
                        item &&
                        <animated.div
                            key={key}
                            style={props}
                            className={showElements ?
                                " w-3/4 sm:w-2/5 lg:w-1/4 mx-auto my-3 transition duration-500 shadow-xl py-2 sm:px-2 text-center md:mx-2 sm:my-4 hover:bg-orange-100 bg-white border-l border-b border-r"
                                : "hidden"}>
                            <h4 className="text-orange-500 text-5xl hover:text-orange-600 h-16 w-16 mr-auto ml-auto"><FontAwesomeIcon icon={faHtml5} /></h4>
                            <ul style={{ fontFamily: "'EB Garamond', serif" }} className="text-sm sm:text-base md:text-lg p-4">
                                <li>Knowledge: basics</li>
                                <li>Experience: 5 months</li>
                            </ul>
                        </animated.div>

                    )
                }
                {
                    boxTransition.map(({ item, key, props }) =>
                        item &&
                        <animated.div
                            key={key}
                            style={props}
                            className={showElements ? " w-3/4 sm:w-2/5 lg:w-1/4 mx-auto my-3 transition duration-500 shadow-xl py-2 sm:px-2 text-center md:mx-2 sm:my-4 hover:bg-orange-100 bg-white border-l border-b border-r" : "hidden"}>
                            <h4 className="text-blue-500 text-5xl hover:text-blue-700 h-16 w-16 mr-auto ml-auto"><FontAwesomeIcon icon={faCss3} /></h4>
                            <ul style={{ fontFamily: "'EB Garamond', serif" }} className="text-sm sm:text-base md:text-lg p-4">
                                <li>Knowledge: basics</li>
                                <li>Experience: 5 months</li>
                                <li>Additional: experience with Bootsrap, Tailwindcss</li>
                            </ul>
                        </animated.div>
                    )
                }
                {
                    boxTransition.map(({ item, key, props }) =>
                        item &&
                        <animated.div
                            key={key}
                            style={props}
                            className={showElements ? " w-3/4 sm:w-2/5 lg:w-1/4 mx-auto my-3 transition duration-500 shadow-xl py-2 sm:px-2 text-center md:mx-2 sm:my-4 hover:bg-orange-100 bg-white border-l border-b border-r" : "hidden"}>
                            <h4 className="text-yellow-400 text-5xl hover:text-yellow-500 w-16 h-16 mr-auto ml-auto"><FontAwesomeIcon icon={faJs} /></h4>
                            <ul style={{ fontFamily: "'EB Garamond', serif" }} className="text-sm sm:text-base md:text-lg p-4">
                                <li>Knowledge: basics</li>
                                <li>Experience: 1 month</li>
                                <li>Additional: experience with ReactJS <span className="text-2xl leading-3 text-blue-500"><FontAwesomeIcon icon={faReact} /></span></li>
                            </ul>
                        </animated.div>
                    )
                }
                {
                    boxTransition.map(({ item, key, props }) =>
                        item &&
                        <animated.div
                            key={key}
                            style={props}
                            className={showElements ? " w-3/4 sm:w-2/5 lg:w-1/4 mx-auto my-3 transition duration-500 shadow-xl py-2 sm:px-2 text-center md:mx-2 sm:my-4 hover:bg-orange-100 bg-white border-l border-b border-r" : "hidden"}>
                            <h4 className="text-red-500 mr-auto ml-auto rounded-full w-16 h-16 leading-3 bg-gray-300 text-5xl hover:bg-gray-400 hover:text-red-700"><FontAwesomeIcon icon={faJava} /></h4>
                            <ul style={{ fontFamily: "'EB Garamond', serif" }} className="text-sm sm:text-base md:text-lg p-4">
                                <li>Knowledge: basics</li>
                                <li>Experience: 1 month</li>
                                <li>Additional: basic OOP konwledge</li>
                            </ul>
                        </animated.div>
                    )
                }
                {
                    boxTransition.map(({ item, key, props }) =>
                        item &&
                        <animated.div
                            key={key}
                            style={props}
                            className={showElements ? " w-3/4 sm:w-2/5 lg:w-1/4 mx-auto my-3 transition duration-500 shadow-xl py-2 sm:px-2 text-center lg:mx-2 sm:my-4 hover:bg-orange-100 bg-white border-l border-b border-r" : "hidden"}>
                            <h4 className="text-purple-500 text-5xl hover:text-purple-600 h-16 w-16 mr-auto ml-auto"><FontAwesomeIcon icon={faPhp} /></h4>
                            <ul style={{ fontFamily: "'EB Garamond', serif" }} className="text-sm sm:text-base md:text-lg p-4">
                                <li>Knowledge: advanced</li>
                                <li>Experience: 3 months</li>
                                <li>Additional: experience with Laravel <span className="text-2xl text-red-500"><FontAwesomeIcon icon={faLaravel} /></span>, MySql</li>
                            </ul>
                        </animated.div>
                    )
                }
            </div>
        </section>
    )
}

export default Skills
