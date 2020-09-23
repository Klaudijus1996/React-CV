import React from 'react'
import Navigation from './Navigation';

const Header = () => {
    return (
        <header className="border-b p-3 flex justify-between items-center bg-gray-700">
            <span className="font-bold text-gray-200">
                AppName
            </span>
            <Navigation
                style={{
                    maxWidth: '1100px'
                }}
            />
        </header>
    )
}

export default Header
