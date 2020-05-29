import React from "react"

import linkStyler from "./linkStyler.module.scss"

const Footer = () => {
    return (
        <footer>
            <p>Created by Varnit Sinha, © 2020. <a style={{marginLeft: "18rem"}} className={linkStyler.linkStyle} href="https://github.com/VarnitS2/PersonalGatsbyWebsite" target="_blank">Source</a></p>
        </footer>
    )
}

export default Footer