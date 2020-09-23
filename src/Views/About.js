import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookF, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Download from '../Components/Download';
// import {  } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <section className="bg-blue-100 p-5">
            <h1 style={{ fontFamily: "'Righteous', cursive" }} className="text-5xl text-center p-5">About me</h1>
            <div className="container bg-gray-200 flex flex-wrap p-5 border">
                <div className="w-2/5 p-5">
                    <img className="border-r p-4" src={require('../Components/Images/me.jpg')} alt="Me" />
                </div>
                <div className="w-2/5 p-5 text-center">
                    <h2 style={{ fontFamily: "'Frank Ruhl Libre', serif" }} className="text-2xl text-left p-2">Junior Web-Developer</h2>
                    <p style={{ fontFamily: "'EB Garamond', serif" }} className="p-2 border-b text-justify text-lg">
                        My name is Klaudijus Kamarauskas and I'm a junior web-developer.
                    In 2020 I studied full-stack web-developing at <a className="text-blue-500 hover:underline" href="https://bit.lt/">Baltic Institute of Technology</a> for 5.5 months.
                    Over the course I've gained basic knowledge of few languages and advanced knowledge in <b>php</b>.<br />
                    I enjoy problem-solving, digging for information, making things <b>move</b> and making things <b>work</b>.<br />
                    I'm a gamer, and what gaming taught me is that <b>the best loot is only achievable by doing the hardest content</b>, and for that
                    you have to invest a huge amount of time. Thankfully I enjoy working hard and reaching that goal and getting my hands on that <b>loot</b>.
                    </p>
                    <p className="p-2 text-center">
                        <a className="text-blue-400 hover:text-blue-500 p-1" href="https://www.linkedin.com/in/klaudijus-kamarauskas-b669831a6/">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a className="text-blue-400 hover:text-blue-500 p-1" href="https://www.facebook.com/claud.hatake">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a className="text-blue-400 hover:text-blue-500 p-2" href="https://github.com/Klaudijus1996?tab=repositories">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </p>
                    <br />
                    <a className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" href={require("../Components/Files/Resume-Klaudijus.pdf")} download="Resume-Klaudijus">Download CV</a>
                </div>
            </div>
        </section>
    )
}

export default About
