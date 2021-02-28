import React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <div>
        <h1>Hello.</h1>
        <h2>I'm Jack, a recent Computer Engineering graduate.</h2>
        <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
    </div>
  )
}

export default IndexPage