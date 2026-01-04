import React, { useContext } from 'react'
import crossIcon from "../../assets/cart_cross_icon.png";
import { ShopContext } from '../Context/ShopContext'
import './CardItems.css'

const CardItems = () => {

    let {getTotalAmount, cartItems, removeCart, all_product } = useContext(ShopContext)

    return (
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Prices</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {all_product.map((e, i) => {
                if (cartItems[e.id] > 0) {
                    return <React.Fragment key={i}>
                        <div className='cartitems-format'>
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img src={crossIcon} onClick={() => removeCart(e.id)} alt="" />
                        </div>
                    </React.Fragment>
                } return null
            })}

            <div className='cartitems-down'>
                <div className='cartitems-total'>
                    <h1>Cart-Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping fee</p>
                            <p>free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-items">
                            <p>Total</p>
                            <p>${getTotalAmount()}</p>
                        </div>

                    </div>
                    <button>Proceed to Checkout</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='Promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardItems