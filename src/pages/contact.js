import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Get in contact with me</h1>
            <h3>Email: jackeast23@gmail.com</h3>
            <h3>My <a href="https://github.com/jackeast23" target = "_blank">GitHub</a></h3>
            <h3>Phone: (613) 985-1523</h3>
        </Layout>
    )
}

export default ContactPage