import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope, faMapMarkedAlt, faMobile, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <section className="bg-blue-100 p-5">
            <h1 style={{ fontFamily: "'Righteous', cursive" }} className="text-5xl text-center p-5">Contact</h1>
            <div className="container flex justify-between p-10">
                <div className="w-2/5 bg-gray-200">
                    <ul>
                        <li className="py-4 flex items-center">
                            <h4 className="inline-block text-center text-red-500 rounded-full w-20 h-20 leading-2 bg-gray-300 text-5xl hover:bg-gray-400 hover:text-red-700">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </h4><p className="leading-3 text-lg inline-block">&nbsp; <FontAwesomeIcon icon={faArrowRight} /> ###########</p>
                        </li>
                        <li className="py-4 flex items-center">
                            <h4 className="inline-block text-center text-red-500 rounded-full w-20 h-20 leading-2 bg-gray-300 text-5xl hover:bg-gray-400">
                                <FontAwesomeIcon icon={faMobileAlt} />
                            </h4><p className="leading-3 text-lg inline-block">&nbsp; <FontAwesomeIcon icon={faArrowRight} /> ###########</p>
                        </li>
                        <li className="py-4 flex items-center">
                            <h4 className="inline-block text-center text-red-500 rounded-full w-20 h-20 leading-2 bg-gray-300 text-5xl hover:bg-gray-400 hover:text-red-700">
                                <FontAwesomeIcon icon={faMapMarkedAlt} />
                            </h4><p className="leading-3 text-lg inline-block">&nbsp; <FontAwesomeIcon icon={faArrowRight} /> ###########</p>
                        </li>
                    </ul>
                </div>
                <div className="w-2/5 bg-gray-300">
                    <textarea style={{ resize: "none" }} className="w-full h-full hover:bg-gray-100 border" name="" id=""></textarea>
                    <button class="float-right bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        Send
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Contact
