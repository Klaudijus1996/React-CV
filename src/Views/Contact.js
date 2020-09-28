import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope, faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

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
            <div className="container flex justify-between p-10">
                <div className={showElements ? "animate-from-left w-2/5 bg-white" : "hidden"}>
                    <ul className="w-4/5 mr-auto ml-auto">
                        <li className={showElements ? "anim-delay-500 animate-scale py-4 flex items-center" : "hidden"}>
                            <h4 className="inline-block text-center text-red-400 rounded-full w-20 h-20 leading-2 bg-white text-5xl hover:bg-gray-100 hover:text-red-500">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </h4><p className="leading-3 text-lg inline-block">&nbsp; <FontAwesomeIcon icon={faArrowRight} /> klaudijus.k1996@gmail.com</p>
                        </li>
                        <li className={showElements ? "anim-delay-500 animate-scale py-4 flex items-center" : "hidden"}>
                            <h4 className="inline-block text-center text-gray-700 rounded-full w-20 h-20 leading-2 bg-white text-5xl hover:bg-gray-100 hover:text-gray-800">
                                <FontAwesomeIcon icon={faMobileAlt} />
                            </h4><p className="leading-3 text-lg inline-block">&nbsp; <FontAwesomeIcon icon={faArrowRight} /> +37067035988</p>
                        </li>
                        <li className={showElements ? "anim-delay-500 animate-scale py-4 flex items-center" : "hidden"}>
                            <h4 className="inline-block text-center rounded-full w-20 h-20 leading-2 text-red-300 text-5xl bg-white hover:bg-gray-100 hover:text-red-500">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </h4><p className="leading-3 text-lg inline-block">&nbsp; <FontAwesomeIcon icon={faArrowRight} /> Partizanų g, Kaunas, Lithuania</p>
                        </li>
                    </ul>
                </div>
                <div className={showElements ? "animate-scale w-2/5 bg-gray-300 shadow-lg" : "hidden"}>
                    <textarea style={{ resize: "none" }} className="w-full h-full hover:bg-gray-100 border focus:outline-none p-2" placeholder="Send me an Email!" name="" id=""></textarea>
                    <div className="w-full text-center">
                        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
