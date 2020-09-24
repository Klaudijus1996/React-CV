import React from 'react'

const Contact = () => {
    return (
        <section className="bg-blue-100 p-20">
            <h1 style={{ fontFamily: "'Righteous', cursive" }} className="text-5xl text-center">Contact</h1>
            <div className="container flex justify-between p-10">
                <div className="w-2/5 bg-gray-200">
                    <ul>
                        <li className="py-4"><span className="text-red-500 mr-auto ml-auto rounded-full w-16 h-16 leading-3 bg-gray-300 text-5xl hover:bg-gray-400 hover:text-red-700">Email</span> - ###########</li>
                        <li className="py-4"><span className="text-red-500 mr-auto ml-auto rounded-full w-16 h-16 leading-3 bg-gray-300 text-5xl hover:bg-gray-400 hover:text-red-700">Phone</span> - ###########</li>
                        <li className="py-4"><span className="text-red-500 mr-auto ml-auto rounded-full w-16 h-16 leading-3 bg-gray-300 text-5xl hover:bg-gray-400 hover:text-red-700">Something</span> - ###########</li>
                    </ul>
                </div>
                <div className="w-2/5 bg-gray-300">
                    <textarea style={{ resize: "none" }} className="w-full h-full hover:bg-gray-100 border" name="" id=""></textarea>
                    <button class="float-right bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        Send
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Contact
