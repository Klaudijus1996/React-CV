import React, { useState } from 'react'
import Particles from 'react-particles-js';
import Background from '../Components/Images/raminta_cho.jpg'


const Heading = () => {
    return (

        <div id="top" style={{
            height: "800px",
            marginTop: "auto",
            marginBottom: "auto",
            backgroundImage: `url(${Background})`
        }} className="w-full">
            <Particles
                className="absolute w-full"
                height="800px"
                params={{
                    particles: {
                        number: {
                            value: 200,
                            density: {
                                enable: true,
                                value_area: 2000,
                            }
                        },
                    },
                }} />
            <div className="z-10 flex content-center flex-wrap w-full bg-gray-800 bg-opacity-25 min-h-full">
                <h1
                    className="text-6xl text-white w-full text-center"
                    style={{
                        height: 'fit-content',
                        fontFamily: "'Righteous', cursive"
                    }}
                >Hello</h1>
                <div style={{ fontFamily: "'Frank Ruhl Libre', serif" }} className="cd-intro w-full text-white">
                    <h1 style={{ fontSize: "52px" }} className="text-center cd-headline clip">
                        <span className="blc">I am &nbsp;</span>
                        <span className="cd-words-wrapper">
                            <b className="is-visible">Klaudijus Kamarauskas</b>
                            <b>Developer</b>
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Heading
