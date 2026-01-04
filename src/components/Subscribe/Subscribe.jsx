import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <div className="subscribe">
        <h1>Get exclusive offers on your email</h1>
        <p>Subscribe to our page and stay updated</p>
        <div>
            <input type="email" placeholder='Enter your email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Subscribe