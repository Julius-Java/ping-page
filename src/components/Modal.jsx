import React from "react";

const SubmitModal = ({gifImg, showModal, handleClick}) => {
    return (
        <div style={{visibility: showModal ? "visible" : "hidden"}} onClick={handleClick} className="overlay">
            <div className="submitModal">
                <img src={gifImg} className="gif" />
                <p>We'll reach out soon</p>
            </div>
        </div>
    )
}

export default SubmitModal;