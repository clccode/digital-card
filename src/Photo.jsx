import React from "react"
import profilePic from "./images/profile-pic.jpg"

export default function Photo() {
    return (
        <div>
            <img src={profilePic} className="profile-pic" />
        </div>
    )
}