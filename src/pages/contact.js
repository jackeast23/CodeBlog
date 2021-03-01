import React from 'react'

import Footer from '../components/footer'
import Header from '../components/header'

const ContactPage = () => {
    return (
        <div>
            <Header />
            <h1>Get in contact with me</h1>
            <h3>Email: jackeast23@gmail.com</h3>
            <h3>My <a href="https://github.com/jackeast23" target = "_blank">GitHub</a></h3>
            <h3>Phone: (613) 985-1523</h3>
            <Footer />
        </div>
    )
}

export default ContactPage