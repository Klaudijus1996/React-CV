import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowRight, faEnvelope, faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import Email from '../Components/Email';
const Contact = () => {
    const [showElements, setShowElements] = useState(false);
    const [switchElement, setSwitchElement] = useState(true);
    const switchElements = () => {
        return window.innerWidth > 420 ? setSwitchElement(true) : setSwitchElement(false);
    }
    const showSection = () => {
        if (window.scrollY >= 1000) {
            setShowElements(true)
        };
    }
    window.addEventListener('scroll', showSection);
    window.addEventListener('resize', switchElements);
    return (
        <section id="contact" className="bg-blue-100 p-5 pb-32">
            <h1 style={{ fontFamily: "'Righteous', cursive" }} className="text-5xl text-center p-5">Contact</h1>
            <div className="container mx-auto lg:flex justify-between p-10">
                <div className={showElements ? "w-4/5 lg:w-2/5 mx-auto lg:mx-0" : "hidden"}>
                    <ul
                        className="
                    w-auto sm:w-10/12 md:w-8/12 lg:w-full xl:w-4/5 
                    text-sm sm:text-base md:text-lg
                    mx-auto
                    ">
                        <li className={showElements ? "py-4 flex" : "hidden"}>
                            <div className={window.innerWidth > 420 ? "text-sm sm:text-base w-full md:text-lg flex mx-auto items-center text-left" :
                                "text-sm sm:text-base md:text-lg mx-auto items-center text-left"}>
                                <p className="py-2 px-2 bg-white text-red-500 hover:bg-gray-100 hover:text-red-700 mx-auto rounded-full" style={{ width: "fit-content" }}><FontAwesomeIcon className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" icon={faEnvelope} /> </p>
                                {
                                    window.innerWidth > 420 ?
                                        <p style={{ width: "fit-content", height: "fit-content" }} className="py-1 px-2">&nbsp;<FontAwesomeIcon icon={faArrowRight} /></p> :
                                        <p style={{ width: "fit-content", height: "fit-content" }} className="py-1 px-2 mx-auto"><FontAwesomeIcon icon={faArrowDown} /></p>
                                }
                                <p className="py-1 px-2">&nbsp;klaudijus.k1996@gmail</p>
                            </div>
                        </li>
                        <li className={showElements ? "py-4 flex" : "hidden"}>
                            <div className={window.innerWidth > 420 ? "text-sm sm:text-base w-full md:text-lg flex mx-auto items-center text-left" :
                                "text-sm sm:text-base md:text-lg mx-auto items-center text-center"}>
                                <p className="py-2 px-3 bg-white text-blue-700 hover:bg-gray-100 hover:text-blue-900 mx-auto rounded-full" style={{ width: "fit-content" }}><FontAwesomeIcon className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" icon={faMobileAlt} /> </p>
                                {
                                    window.innerWidth > 420 ?
                                        <p style={{ width: "fit-content", height: "fit-content" }} className="py-1 px-2">&nbsp;<FontAwesomeIcon icon={faArrowRight} /></p> :
                                        <p style={{ width: "fit-content", height: "fit-content" }} className="py-1 px-2 mx-auto"><FontAwesomeIcon icon={faArrowDown} /></p>
                                }
                                <p className="py-1 px-2">&nbsp;+37067035988</p>
                            </div>
                        </li>
                        <li className={showElements ? "py-4 flex" : "hidden"}>
                            <div className={window.innerWidth > 420 ? "text-sm sm:text-base w-full md:text-lg flex mx-auto items-center text-left" :
                                "text-sm sm:text-base md:text-lg mx-auto items-center text-center"}>
                                <p className="py-2 px-3 bg-green-300 text-red-500 hover:bg-green-400 hover:text-red-700 mx-auto rounded-full" style={{ width: "fit-content" }}><FontAwesomeIcon className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" icon={faMapMarkerAlt} /> </p>
                                {
                                    window.innerWidth > 420 ?
                                        <p style={{ width: "fit-content", height: "fit-content" }} className="py-1 px-2">&nbsp;<FontAwesomeIcon icon={faArrowRight} /></p> :
                                        <p style={{ width: "fit-content", height: "fit-content" }} className="py-1 px-2 mx-auto"><FontAwesomeIcon icon={faArrowDown} /></p>
                                }
                                <p className="py-1 px-2 text-xs">&nbsp;Partizanų g, Kaunas, Lithuania</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={showElements ? "w-4/5 lg:w-2/5 h-auto lg:h-auto shadow-sm mx-auto lg:mx-0 mt-10 lg:mt-0" : "hidden"}>
                    <Email />
                </div>
            </div>
        </section>
    )
}

export default Contact
