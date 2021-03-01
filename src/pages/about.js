import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>My name is Jack East and I am from Aurora, Ontario. I am a recent Computer Engineering graduate from Queen's University looking for a job as a software engineer. In my free time I enjoy cooking, playing video games, and exercising.</p>
            <h3><Link to="/contact">Get in contact with me.</Link></h3>
        </Layout>
    )
}

export default AboutPage