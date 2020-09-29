import React, { useState } from 'react'
import Navigation from './Navigation';
import { Link, animateScroll as scroll } from "react-scroll";


const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 780) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
    return (
        <header style={{ transition: "1s" }}
            className={
                navbar ? 'p-3 w-full fixed bg-gray-800 text-gray-100 z-10' : 'p-3 w-full fixed z-10'
            }
        >
            <div className="flex justify-between items-center">
                <Link
                    style={{ cursor: "pointer" }}
                    className="ml-64 font-bold text-gray-200"
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >KlaudijusCV</Link>
                <Navigation
                    style={{
                        maxWidth: '1100px'
                    }}
                />
            </div>
        </header>
    )
}

export default Header
