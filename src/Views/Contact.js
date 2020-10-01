import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowRight, faEnvelope, faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import Email from '../Components/Email';
const Contact = () => {
    const [showElements, setShowElements] = useState(false);
    const [switchElement, setSwitchElement] = useState(false);
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
                <div className={showElements ? "w-4/5 lg:w-2/5 bg-white mx-auto lg:mx-0" : "hidden"}>
                    <ul
                        className="
                    w-auto sm:w-10/12 md:w-8/12 lg:w-full xl:w-4/5 
                    text-sm sm:text-base md:text-lg
                    mr-auto ml-auto">
                        <li className={showElements ? "py-4 flex" : "hidden"}>
                            <div className={switchElement ? "text-sm sm:text-base md:text-lg flex mx-auto items-center text-center" :
                                "text-sm sm:text-base md:text-lg mx-auto items-center text-center"}>
                                <p className=""><FontAwesomeIcon className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" icon={faEnvelope} /> </p>
                                <p>{switchElement ? <>&nbsp;<FontAwesomeIcon icon={faArrowRight} /></> : <FontAwesomeIcon icon={faArrowDown} />}</p>
                                <p>&nbsp;klaudijus.k1996@gmail.com</p>
                            </div>
                        </li>
                        <li className={showElements ? "py-4 flex" : "hidden"}>
                            <div className={switchElement ? "text-sm sm:text-base md:text-lg flex mx-auto items-center text-center" :
                                "text-sm sm:text-base md:text-lg mx-auto items-center text-center"}>
                                <p className=""><FontAwesomeIcon className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" icon={faMobileAlt} /> </p>
                                <p>{switchElement ? <>&nbsp;<FontAwesomeIcon icon={faArrowRight} /></> : <FontAwesomeIcon icon={faArrowDown} />}</p>
                                <p>&nbsp;+37067035988</p>
                            </div>
                        </li>
                        <li className={showElements ? "py-4 flex" : "hidden"}>
                            <div className={switchElement ? "text-sm sm:text-base md:text-lg flex mx-auto items-center text-center" :
                                "text-sm sm:text-base md:text-lg mx-auto items-center text-center"}>
                                <p className=""><FontAwesomeIcon className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" icon={faMapMarkerAlt} /> </p>
                                <p>{switchElement ? <>&nbsp;<FontAwesomeIcon icon={faArrowRight} /></> : <FontAwesomeIcon icon={faArrowDown} />}</p>
                                <p>&nbsp;Partizanų g, Kaunas, Lithuania</p>
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
