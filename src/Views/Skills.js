import React from 'react'

const Skills = () => {
    return (
        <section style={{
            backgroundColor: "black",
            width: "100%",
            display: "inline-block",
            padding: "0 0 50px 0"
        }}>
            <h1
                style={{
                    color: 'white'
                }}
                className="text-center text-5xl"
            >
                Skills</h1>
            <div
                style={{
                    width: "33%",
                    height: "400px",
                    backgroundColor: "gray",
                    float: "left",
                    color: "black"

                }}
                className="text-center text-3xl ml-10"
            >
                <p>
                    Content ABC
                </p>
            </div>
            <div
                className="text-center text-3xl mr-10"
                style={{
                    width: "33%",
                    height: "400px",
                    backgroundColor: "white",
                    float: "right",
                    color: "black"
                }}
            >
                <p>
                    Content BCA
                </p>
            </div>
        </section>
    )
}

export default Skills
