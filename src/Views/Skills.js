import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faHtml5, faJava, faJs, faPhp } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
    return (
        <section id="skills" className="bg-gray-100 p-5">
            <h1 style={{ fontFamily: "'Righteous', cursive" }} className="text-5xl text-center p-5">Skills</h1>
            <div className="container flex flex-wrap justify-between">
                <div className="w-1/4 shadow-xl p-2 text-center m-2 my-4 hover:bg-gray-100 bg-white border-l border-b border-r">
                    <h4 className="text-orange-500 text-5xl hover:text-orange-600 h-16 w-16 mr-auto ml-auto"><FontAwesomeIcon icon={faHtml5} /></h4>
                    <p style={{ fontFamily: "'EB Garamond', serif" }} className="text-lg p-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, vero asperiores incidunt vitae quod perferendis?
                    </p>
                </div>
                <div className="w-1/4 shadow-xl p-2 text-center m-2 my-4 hover:bg-gray-100 bg-white border-l border-b border-r">
                    <h4 className="text-blue-500 text-5xl hover:text-blue-700 h-16 w-16 mr-auto ml-auto"><FontAwesomeIcon icon={faCss3} /></h4>
                    <p style={{ fontFamily: "'EB Garamond', serif" }} className="text-lg p-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, vero asperiores incidunt vitae quod perferendis?
                    </p>
                </div>
                <div className="w-1/4 shadow-xl p-2 text-center m-2 my-4 hover:bg-gray-100 bg-white border-l border-b border-r">
                    <h4 className="text-yellow-400 text-5xl hover:text-yellow-500 w-16 h-16 mr-auto ml-auto"><FontAwesomeIcon icon={faJs} /></h4>
                    <p style={{ fontFamily: "'EB Garamond', serif" }} className="text-lg p-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, vero asperiores incidunt vitae quod perferendis?
                    </p>
                </div>
                <div className="w-1/4 shadow-xl p-2 text-center m-2 my-4 hover:bg-gray-100 bg-white border-l border-b border-r">
                    <h4 className="text-red-500 mr-auto ml-auto rounded-full w-16 h-16 leading-3 bg-gray-300 text-5xl hover:bg-gray-400 hover:text-red-700"><FontAwesomeIcon icon={faJava} /></h4>
                    <p style={{ fontFamily: "'EB Garamond', serif" }} className="text-lg p-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, vero asperiores incidunt vitae quod perferendis?
                    </p>
                </div>
                <div className="w-1/4 shadow-xl p-2 text-center m-2 my-4 hover:bg-gray-100 bg-white border-l border-b border-r ">
                    <h4 className="text-purple-500 text-5xl hover:text-purple-600 h-16 w-16 mr-auto ml-auto"><FontAwesomeIcon icon={faPhp} /></h4>
                    <p style={{ fontFamily: "'EB Garamond', serif" }} className="text-lg p-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, vero asperiores incidunt vitae quod perferendis?
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Skills
