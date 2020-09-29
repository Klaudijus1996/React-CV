import React, { useState } from 'react'
import NavLinks from './NavLinks.js';
import ResponsiveNav from './ResponsiveNav.js';





const Navigation = () => {
    const [hiddenNav, setHiddenNav] = useState(false);
    const hideNav = () => {
        if (window.innerWidth > 768) {
            setHiddenNav(true);
        } else {
            setHiddenNav(false);
        }
    }
    window.addEventListener('resize', hideNav);
    return (
        <nav className="lg:mr-64">
            <div className="w-full flex flex-wrap">
                <div className="md:hidden">
                    <ResponsiveNav />
                </div>
                <div className={hiddenNav ? "md:text-sm md:flex md:flex-wrap" : "hidden"}>
                    <NavLinks />
                </div>
            </div>
        </nav>
    )
}

export default Navigation
