import React from "react"

import Layout from "../components/layout"
import linkStyler from "../components/linkStyler.module.scss"

const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact Me</h1>
            <p>
                The best way to reach me is via email at <a className={linkStyler.linkStyle} href="mailto:varnits2@illinois.edu">varnits2@illinois.edu</a>.
            </p>
        </Layout>
    )
}

export default ContactPage