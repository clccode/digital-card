import React from "react"
import twitter from "./images/twitter.png"
import facebook from "./images/facebook.png"
import instagram from "./images/instagram.png"
import gitHub from "./images/github.png"

export default function Footer() {
    return (
        <footer>
            <div className="footer--container">
                <a href="https://x.com/ChristopherLC" target="_blank"><img src={twitter} /></a>
                <a href="https://www.facebook.com/campbellcl" target="_blank"><img src={facebook} /></a>
                <a href="https://www.instagram.com/me_clc/" target="_blank"><img src={instagram} /></a>
                <a href="https://github.com/clccode" target="_blank"><img src={gitHub}/></a>
            </div>
        </footer>
    )
}