import React from 'react'
import './Footer.css'
import footer_image from '../../assets/logo_big.png'
import instagram from '../../assets/instagram_icon.png'
import Whatsapp from '../../assets/whatsapp_icon.png'
import pinterest from '../../assets/pinterest_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_image} alt="" />
            <p>SHOPPER</p>

        </div>
        <ul className='footer-links'> 
            <li>Company</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
            <li>Offices</li>
        </ul>

        <div className="footer-social-icon">
            <div className="footer-icon">
            <img src={instagram} alt="" />
            </div>
        

            <div className="footer-icon">
            <img src={pinterest} alt="" />
            </div>
             
            <div className="footer-icon">
            <img src={Whatsapp} alt="" />
            </div>
        </div>

        <div className="copyright">
        <hr />
        <p>copyright @ 2025 All Rights Reserved</p>
        
        </div>
    </div>
  )
}

export default Footer