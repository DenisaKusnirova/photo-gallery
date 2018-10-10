import React from 'react'
import './headers.scss'
import { Link } from 'react-router-dom'

const Headers = (props) => (
  <div>
    <div className="headers">
      <h3>PHOTO GALLERY</h3>
      <Link to="/" className={props.className}>
        <h4>{props.subheader}</h4>
      </Link>
    </div>
    <hr />
  </div>
)

export default Headers