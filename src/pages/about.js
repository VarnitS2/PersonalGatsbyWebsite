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
                On the RASC-AL team, I'm on the Propulsion, Entry/Descent/Landing, and Orbits subteam working on nuclear propulsion systems and Reaction Control Systems (RCS) for our theoretical spaceship. For Space Grant, I am on the Flight Dynamics subteam working
                on minimizing drag on the rocket using computer-controlled flaps.
            </p>
            <p>
                I am also a Course Developer for <a className={linkStyler.linkStyle} href="https://cs125.cs.illinois.edu/" target="_blank">CS 125</a>, currently helping manage a sister course - <a className={linkStyler.linkStyle} href="https://kotlin.cs.illinois.edu/" target="_blank">CS 199</a>.
            </p>
            <p>
                In the past, I volunteered for <a className={linkStyler.linkStyle} href="https://www.thecommunitylibraryproject.org/" target="_blank">The Community Library Project</a> in Gurgaon, India. During my time there, I developed a fully functional and 
                scalable cataloging software for all library branches, designed and implemented an optimized way of logging and issuing books across all library branches by generating specific library barcodes for every book, and led various outreach activities and 
                events for elementary to high school aged students to interest them in reading and research.
            </p>
        </Layout>
    )
}

export default AboutPage