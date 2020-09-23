import React from 'react'

function Download() {
    const downloadFile = () => {
        window.location.href = "../Files/Resume-Klaudijus.pdf"
    }
    return (
        <button className="p-3 bg-gray-500" onClick={downloadFile} />
    )
}

export default Download
