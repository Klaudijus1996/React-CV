import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";


const NavLinks = (props) => {
    return (
        <>
            <Link
                style={{ cursor: "pointer" }}
                className={"block py-3 border-t border-b md:border-none md:mt-0 mt-4 text-gray-700 hover:text-gray-900 md:text-white md:hover:text-gray-200 mr-4"}
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >Top</Link>
            <Link
                style={{ cursor: "pointer" }}
                className="block py-3 border-b mt-4 md:border-none md:mt-0 text-gray-700 hover:text-gray-900 md:text-white md:hover:text-gray-200 mr-4"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={props.closeMenu}
            >About</Link>
            <Link
                style={{ cursor: "pointer" }}
                className="block py-3 border-b mt-4 md:border-none md:mt-0 text-gray-700 hover:text-gray-900 md:text-white md:hover:text-gray-200 mr-4"
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={props.closeMenu}
            >Skills</Link>
            <Link
                style={{ cursor: "pointer" }}
                className="block py-3 border-b mt-4 md:border-none md:mt-0 text-gray-700 hover:text-gray-900 md:text-white md:hover:text-gray-200 mr-4"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={props.closeMenu}
            >Contact</Link>
        </>
    )
}

export default NavLinks
