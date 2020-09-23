import { findAllByDisplayValue } from '@testing-library/react'
import React, { useState } from 'react'

const Heading = () => {
    return (

        <div
            className="flex content-center flex-wrap w-full bg-cover"
            style={{
                height: "800px",
                marginTop: "auto",
                marginBottom: "auto",
                backgroundImage: "url(https://occ-0-92-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABceL_FxRrEg1Jm2LyiYugCJwBkJ2v4GmCBWQ_JNLBXCu1tpO1CMoOxGk9R74PCzrCR0FLIrjdgZlyIHnZEuiHArY6C9G.jpg?r=a82)"
            }}>
            <h1
                className="text-6xl w-full text-center"
                style={{
                    height: 'fit-content',
                    fontFamily: "'Righteous', cursive"
                }}
            >Hello</h1>
            <div style={{ fontFamily: "'Frank Ruhl Libre', serif" }} className="cd-intro w-full">
                <h1 className="text-center cd-headline clip text-5xl">
                    <span className="blc">I am &nbsp;</span>
                    <span className="cd-words-wrapper">
                        <b className="is-visible">Klaudijus Kamarauskas</b>
                        <b>Developer</b>
                    </span>
                </h1>
            </div>
        </div>
    )
}

export default Heading
