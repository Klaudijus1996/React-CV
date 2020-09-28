import React, { useState } from 'react'
import { useTransition } from 'react-spring';
import { Link, animateScroll as scroll } from "react-scroll";




const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false);
    const maskTransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })
    const menuTransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateY(-100%)' },
        enter: { opacity: 1, transform: 'translateY(0%)' },
        leave: { opacity: 0, transform: 'translateY(-100%)' },
    })
    // className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
    // mask className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"

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
                    {/* <a href="#about" className="block focus:underline mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                        About
      </a>
                    <a href="#skills" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
                        Skills
      </a>
                    <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">
                        Contact
      </a> */}
                </div>
            </div>
        </nav>
    )
}

export default Navigation
