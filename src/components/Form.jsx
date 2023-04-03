import React from "react";
const Form = (props) => {

    const {handleInputFunc, handleSubmitFunc, onError, value} = props

    return (
        <form onSubmit={handleSubmitFunc} id="form">
            <div className="input">
                <input
                    aria-label="Email Input"
                    value={value}
                    onChange={handleInputFunc}
                    type="text"
                    name="email"
                    placeholder="Your email address..."
                />

                <small className="error-message">{onError}</small>
            </div>

            <button type="submit" className="btn">Notify Me</button>
        </form>
    )
}

export default Form;