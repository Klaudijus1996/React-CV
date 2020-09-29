import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated } from 'react-spring';
import NavLinks from './NavLinks.js';

function ResponsiveNav() {
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
    return (
        <>
            <span
                className="text-xl text-white">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}

                />
            </span>
            {
                maskTransitions.map(({ item, key, props }) =>
                    item && <animated.div
                        key={key}
                        style={props}
                        className="bg-black bg-opacity-50 fixed top-0 left-0 w-full h-screen z-50"
                        onClick={() => setShowMenu(false)}
                    >
                    </animated.div>
                )
            }
            {
                menuTransitions.map(({ item, key, props }) =>
                    item && <animated.div
                        key={key}
                        style={props}
                        className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
                    >
                        <NavLinks closeMenu={() => setShowMenu(false)} />
                    </animated.div>
                )
            }
        </>
    )
}

export default ResponsiveNav
