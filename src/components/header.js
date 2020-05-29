import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"
import githubLogo from "../assets/github.jpg"
import linkedinLogo from "../assets/linkedin.jpg"

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">
                    VARNIT SINHA
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link>
                    </li>
                    <ul className={headerStyles.navLogo}>
                        <li>
                            <a href="https://github.com/VarnitS2" target="_blank"><img src={githubLogo} alt="GitHub" /></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/varnits/" target="_blank"><img className={headerStyles.navLogoItem} src={linkedinLogo} alt="LinkedIn" /></a>
                        </li>
                    </ul>
                </ul>
            </nav>
        </header>
    )
}

export default Header