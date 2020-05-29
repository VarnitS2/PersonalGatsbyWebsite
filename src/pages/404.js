import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import linkStyler from "../components/linkStyler.module.scss"

const NotFound = () => {
    return (
        <Layout>
            <h1>Page not found</h1>
            <p><Link className={linkStyler.linkStyle} to="/">Head home</Link></p>
        </Layout>
    )
}

export default NotFound