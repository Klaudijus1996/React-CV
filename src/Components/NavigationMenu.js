import React from 'react'
// import Navigation from './Navigation';
// import Home from '../Views/Home';
import {
    Link
} from "react-router-dom";

const NavigationMenu = () => {
    return (
        <div>
            <ul>
                <li>
                    <a href="/"
                        className="text-blue-500 py-3"
                    >Home</a>
                </li>
                <li>
                    <Link to="/about"
                        className="text-blue-500 py-3"
                    >About</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu
