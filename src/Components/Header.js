import React, { useState } from 'react'
import Navigation from './Navigation';

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    let header;
    const changeBackground = () => {
        if (window.scrollY >= 780) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
    return (
        <header className={navbar ? 'p-3 w-full fixed bg-gray-800 text-gray-100' : 'p-3 w-full fixed'}>
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
