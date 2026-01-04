import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionBox'>
            <div className='descriptionBox-navigator'>
                <div className='descriptionBox-nav-box'>Description</div>
                <div className='descriptionBox-nav-box-fade'>Reviews(122)</div>
            </div>

            <div className='descriptionBox-description'>
                <p>An ecommerce website is an online store where businesses sell goods
                and services to customers over the internet. It's a digital storefront
                that allows customers to browse, select, and purchase products, and
                facilitates the entire transaction process from payment to shipping</p>

                <p>
                While the traditional bricks and mortar business model is still
                relevant, e-commerce has become a preferred choice for conducting
                business for many sellers across India. Here are some of the
                points that differentiate e-commerce from the traditional, making
                it a better fit for the social media-driven generation of
                consumers.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox