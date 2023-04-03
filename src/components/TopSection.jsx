import React from "react";
import { useState } from "react";
import Logo from "../assets/logo.svg"
import Form from "./Form"

const Top = () => {
    const [emailInput, setEmailInput] = useState("");

    const validateEmail =  (emailValue) => {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(emailValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!validateEmail(emailInput)) {
            e.target.classList.add("email-error")
            setTimeout(() => {
                e.target.classList.remove("email-error")
            }, 5000)
        } else {
            alert("We'll reach out soon!")
        }
    }

    const handleInput = (e) => {
        const {name, value} = e.target;
        setEmailInput(value)
    }

    let errorMessage = "Please provide a valid email address"

    return (
        <>
            <section className="container top">
                <div className="logo">
                    <img src={Logo} alt="Ping" />
                </div>
                <h1>We are launching <span className="soon">soon!</span></h1>
                <p>Subscribe and get notified</p>
                <Form
                    handleInputFunc={handleInput}
                    handleSubmitFunc={handleSubmit}
                    onError={errorMessage}
                    value={emailInput}
                />
            </section>
        </>
    )
}

export default Top;