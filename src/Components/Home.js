import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated } from 'react-spring';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Home = () => {
    const [showForm, setForm] = useState(false);
    // className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
    let form;
    if (showForm) {
        form = <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Name" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Sign In
                    </button>
        </form>
    }
    return (
        <>
            <FontAwesomeIcon
                icon={faCoffee}
                onClick={() => setForm(!showForm)}
            />
            {form}
        </>
    )
}

export default Home
