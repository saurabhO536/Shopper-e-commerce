import React from 'react'
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'
// import hero_image from '../assets/hero_image.png'
import model_image from '../../assets/new-model_image.png'
import '../Hero/Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left-side">
        <h2>New Arrivals Only</h2>
        <div>
          <div className="hero-icon">
            <p>New</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collection</p>
          <p>for everyone</p>
          <div className="hero-button">
            <div>latest-collection</div>
            <img src={arrow_icon} alt="" />
        </div>
          {/* <button className="hero-button">
            latest-collection
            <img src={arrow_icon} alt="Arrow icon" />
          </button> */}
        </div>
      </div>

      <div className="hero-right-side">
        {/* <img src={hero_image} alt="" /> */}
        <img src={model_image} alt="" />
      </div>
    </div>
  )
}

export default Hero