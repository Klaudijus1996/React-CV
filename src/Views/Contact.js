import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope, faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import Email from '../Components/Email';
const Contact = () => {
    const [showElements, setShowElements] = useState(false);
    const showSection = () => {
        if (window.scrollY >= 1000) {
            setShowElements(true)
        };
    }
    window.addEventListener('scroll', showSection);
    return (
        <section id="contact" className="bg-blue-100 p-5 pb-32">
            <h1 style={{ fontFamily: "'Righteous', cursive" }} className="text-5xl text-center p-5">Contact</h1>
            <div className="container mx-auto lg:flex justify-between p-10">
                <div className={showElements ? "w-4/5 lg:w-2/5 bg-white mx-auto lg:mx-0" : "hidden"}>
                    <ul className="w-auto sm:w-10/12 md:w-8/12 lg:w-full xl:w-4/5 mr-auto ml-auto">
                        <li className={showElements ? "py-4 sm:flex items-center" : "hidden"}>
                            <h4 className="inline-block text-center text-red-400 rounded-full w-20 h-20 leading-2 bg-white text-5xl hover:bg-gray-100 hover:text-red-500">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </h4><p className="leading-3 break-all sm:break-normal text-lg inline-block">&nbsp; <FontAwesomeIcon className="hidden sm:contents" icon={faArrowRight} /> klaudijus.k1996@gmail.com</p>
                        </li>
                        <li className={showElements ? "py-4 sm:flex items-center" : "hidden"}>
                            <h4 className="inline-block text-center text-gray-700 rounded-full w-20 h-20 leading-2 bg-white text-5xl hover:bg-gray-100 hover:text-gray-800">
                                <FontAwesomeIcon icon={faMobileAlt} />
                            </h4><p className="leading-3 break-all sm:break-normal text-lg inline-block">&nbsp; <FontAwesomeIcon className="hidden sm:contents" icon={faArrowRight} /> +37067035988</p>
                        </li>
                        <li className={showElements ? "py-4 sm:flex items-center" : "hidden"}>
                            <h4 className="inline-block text-center rounded-full w-20 h-20 leading-2 text-red-300 text-5xl bg-white hover:bg-gray-100 hover:text-red-500">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </h4><p className="leading-3 break-all sm:break-normal text-lg inline-block">&nbsp; <FontAwesomeIcon className="hidden sm:contents" icon={faArrowRight} /> Partizanų g, Kaunas, Lithuania</p>
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
