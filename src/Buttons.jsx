import React from "react"
import mail from "./images/mail.png"
import linkedIn from "./images/linkedin.png"

export default function Buttons() {
    return (
        <div className="buttons--container">
            <a href="mailto:campbellcl@gmail.com">
                <button id="email" className="email"><img src={mail} />Email</button>
            </a>
            <a href="https://www.linkedin.com/in/cl-campbell/" target="_blank">
                <button id="linkedIn" className="linkedIn"><img src={linkedIn} />LinkedIn</button>
            </a>
        </div>
    )
}