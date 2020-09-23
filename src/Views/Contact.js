import React from 'react'

const Contact = () => {
    return (
        <section
            className="w-full bg-gray-300 text-center p-8"
        >

            <h1 className="text-5xl text-center">Contact FORM</h1>
            <div className="">
                <form
                    className="w-1/2"
                >

                    <input className="w-1/2 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4  appearance-none leading-normal" type="text" placeholder="John Doe" />

                    <input className="w-1/2 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4  appearance-none leading-normal" type="email" placeholder="john.doe@example.com" />


                    <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        Submit
                </button>

                </form>
            </div>
        </section>
    )
}

export default Contact
