import React from "react"

import Layout from "../components/layout"
import linkStyler from "../components/linkStyler.module.scss"

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>
                Hi! My name is Varnit Sinha and I am a freshman at the University of Illinois at Urbana Champaign. I am majoring in Engineering Physics with a concentration in Computational Physics, and minoring in Mathematics and Computer Science.
            </p>
            <p>
                I am a part of the Illinois Space Society (<a className={linkStyler.linkStyle} href="https://students.grainger.illinois.edu/iss/home/" target="_blank">ISS</a>), where I am on the NASA Revolutionary Aerospace Systems Concepts Academic 
                Linkage (<a className={linkStyler.linkStyle} href="https://rascal.nianet.org/" target="_blank">RASC-AL</a>) and the NASA <a className={linkStyler.linkStyle} href="https://www.nasa.gov/stem/spacegrant/about/index.html" target="_blank">Space Grant</a> teams.
                On the RASC-AL team, I'm on the Propulsion, Entry/Descent/Landing, and Orbits subteam working on nuclear propulsion systems and RCS solutions for our theoretical spaceship.
            </p>
        </Layout>
    )
}

export default AboutPage