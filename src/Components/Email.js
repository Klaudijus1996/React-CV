import React, { useState } from 'react'
import emailjs from 'emailjs-com';

function Email() {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            emailjs.sendForm('service_9lngbfl', 'default1', e.target, 'user_huJu7HpHM4qxPtURXCKez')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            e.target.reset();
        } else {
            setSuccessMessage("");
        }
    }
    function validateForm() {
        const errors = {};
        let isValid = true;

        if (subject.trim().length > 10) {
            errors.subjectLength = "Error: subject must contain less than 10 characters!";
            isValid = false;
        }
        if (subject.trim().length < 1 || name.trim().length < 1 || message.length < 1 || email.length < 1) {
            errors.emptyString = "Error: All fields are required!";
            isValid = false;
        }
        if (subject.match(/delete/ig) || name.match(/delete/ig) || message.match(/delete/ig) || email.match(/delete/ig)) {
            errors.deleteFalse = "Error: forbidden input...";
        }
        if (name.trim().length > 12) {
            errors.nameLength = "Error: name field must be less than 12 characters!";
            isValid = false;
        }
        if (name.match(/[+=_\-)(*&^%$#@!/?.>,<'";:[{\]}\\|0-9]/ig)) {
            errors.containsSymbols = "Error: name must contain only alphabetic characters!";
            isValid = false;
        }
        if (email.length < 6) {
            errors.shortEmail = "Error: email must contain atleast 6 characters";
            isValid = false;
        }
        if (!email.match(/[@.]/ig)) {
            errors.invalidEmail = "Error: missing required symbols for email!";
            isValid = false;
        }
        if (isValid) {
            setSuccessMessage("Your message has been sent!");
        }
        setErrors(errors);
        return isValid;
    }
    return (
        <>
            {
                Object.keys(errors).map((key) => {
                    return <div key={key} className="w-full text-red-700 bg-red-300 mb-2 px-4 py-2 cursor-default">{errors[key]}</div>
                })
            }
            {
                successMessage !== "" ? <div className="w-full text-green-700 bg-green-300 mb-2 px-4 py-2 cursor-default">{successMessage}</div> : null
            }

            <form onSubmit={submitForm} className="w-full h-full">
                <div className="w-full border mb-2">
                    <input
                        className="px-4 py-2 w-full focus:outline-none"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        autoComplete="off"
                        type="email"
                        placeholder="*Your Email"
                        name="email" />
                </div>
                <div className="w-full border mb-2">
                    <input
                        className="px-4 py-2 w-full focus:outline-none"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
                        autoComplete="off"
                        type="text"
                        placeholder="*Subject"
                        name="subject" />
                </div>
                <div className="w-full border mb-2">
                    <input
                        className="px-4 py-2 w-full focus:outline-none"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                        autoComplete="off"
                        type="text"
                        placeholder="*Your name"
                        name="name" />
                </div>
                <div className="w-full">
                    <textarea
                        style={{ resize: "none" }}
                        value={message}
                        onChange={(e) => { setMessage(e.target.value) }}
                        className="px-4 py-2 w-full h-48 border hover:bg-gray-100 border focus:outline-none"
                        placeholder="Send me an Email!"
                        name="message"
                        id="" />
                </div>
                <div className="w-full text-center">
                    <input
                        type="submit"
                        className="my-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                        value="Send!" />
                </div>
            </form>
        </>
    )
}

export default Email
