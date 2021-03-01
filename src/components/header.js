import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <h1>Jack East</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact me</Link>
                    </li>
                    <li>
                        <Link to="/about">About me</Link>
                    </li>
                    <li>
                        <Link to="/blog">My blog</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
