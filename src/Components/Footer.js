import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';



const Footer = () => {
    return (
        <footer style={{ transition: "0.3s" }} className="bg-gray-800 hover:bg-gray-900 text-gray-100 p-8 w-full min-h-32">
            <div className="relative">
                <Link
                    style={{ left: "50%", bottom: "16px", transform: "translate(-50%)" }}
                    className="text-3xl text-red-400 hover:text-red-500 absolute"
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <FontAwesomeIcon icon={faArrowAltCircleUp} />
                </Link>
            </div>
            <div className="flex mr-auto ml-auto w-2/5">

                <p className="w-2/4 px-10 py-5 text-right border-r">
                    Author: <b>Klaudijus Kamarauskas</b><br />
                Project made with: <b>ReactJs</b><br />
                Source code: <a className="transition duration-500 ease-in-out text-purple-300 hover:text-purple-500" href="https://github.com/Klaudijus1996/React-CV"><FontAwesomeIcon icon={faGithubSquare} /></a>
                </p>
                <p className="w-2/4 px-10 py-5 text-left border-l">
                    This page is currently static. Will be attempting to make it into a cms soon
                    &copy; Copyright 2020
                </p>
            </div>
        </footer>
    )
}

export default Footer
