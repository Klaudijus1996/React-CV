import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";


const NavLinks = (props) => {
    return (
        <>
            <Link
                style={{ cursor: "pointer" }}
                className="block py-3 border-t border-b mt-4 text-gray-700 hover:text-gray-900 mr-4"
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >Top</Link>
            <Link
                style={{ cursor: "pointer" }}
                className="block py-3 border-b mt-4 text-gray-700 hover:text-gray-900 mr-4"
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
                className="block py-3 border-b mt-4 text-gray-700 hover:text-gray-900 mr-4"
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
                className="block py-3 border-b mt-4 text-gray-700 hover:text-gray-900 mr-4"
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
