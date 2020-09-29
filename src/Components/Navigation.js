import React, { useState } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";




const Navigation = () => {
    return (
        <nav className="mr-64">
            <div className="w-full flex flex-wrap">
                <div className="text-sm flex flex-wrap">
                    <Link
                        style={{ cursor: "pointer" }}
                        className="block focus:underline mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >About</Link>
                    <Link
                        style={{ cursor: "pointer" }}
                        className="block focus:underline mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Skills</Link>
                    <Link
                        style={{ cursor: "pointer" }}
                        className="block focus:underline mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
