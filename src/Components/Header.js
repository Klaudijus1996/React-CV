import React, { useState } from 'react'
import Navigation from './Navigation';

const Header = () => {
    //flex justify-between items-center
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
        <header className="p-3 w-full fixed">
            {/* // <header className={navbar ? 'navfill active' : 'navfill'}> */}
            <div className="flex justify-between items-center">
                <span className="font-bold text-gray-200 ml-64">
                    AppName
            </span>
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
