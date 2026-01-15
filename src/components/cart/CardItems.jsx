import React, { useContext } from "react";
import crossIcon from "../../assets/cart_CROSS_icon.png";
import { ShopContext } from "../context/ShopContext";

const CardItems = () => {
  const { getTotalAmount, cartItems, removeCart, all_product } =
    useContext(ShopContext);

  return (
    <div className="w-[90%] max-w-[1000px] mx-auto my-10 p-5 bg-white rounded-[10px] shadow-[0_0_15px_rgba(0,0,0,0.1)] font-sans">
      {/* Header */}
      <div className="grid grid-cols-[1.5fr_2fr_1fr_1fr_1fr_0.5fr] items-center gap-[15px] py-[10px] text-[16px] font-bold border-b-2 border-[#ddd] mb-[10px]">
        <p>Products</p>
        <p>Title</p>
        <p>Prices</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr />

      {/* Cart Items */}
      {all_product.map((e, i) => {
        if (cartItems[e.id] > 0) {
          return (
            <React.Fragment key={i}>
              <div className="grid grid-cols-[1.5fr_2fr_1fr_1fr_1fr_0.5fr] items-center gap-[15px] py-[15px] text-[16px] border-b border-[#eee]">
                <img
                  src={e.image}
                  alt=""
                  className="w-[60px] h-[60px] object-cover rounded-[6px]"
                />

                <p className="text-gray-800">{e.name}</p>

                <p className="text-gray-800">${e.new_price}</p>

                <button className="w-fit px-[10px] py-[6px] border border-[#ccc] rounded-[5px] bg-[#f8f8f8] font-medium cursor-default">
                  {cartItems[e.id]}
                </button>

                <p className="text-gray-800">
                  ${e.new_price * cartItems[e.id]}
                </p>

                <img
                  src={crossIcon}
                  alt="remove"
                  onClick={() => removeCart(e.id)}
                  className="w-6 h-6 cursor-pointer transition-transform duration-200 hover:scale-110"
                />
              </div>
            </React.Fragment>
          );
        }
        return null;
      })}

      {/* Bottom Section */}
      <div className="flex justify-between flex-wrap gap-[30px] mt-[30px]">
        {/* Total Box */}
        <div className="flex-1 min-w-[300px] bg-[#fafafa] p-5 rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
          <h1 className="mb-5 text-[20px] border-b-2 border-[#eee] pb-2">
            Cart-Totals
          </h1>

          <div>
            <div className="flex justify-between my-3 text-[15px]">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>

            <hr />

            <div className="flex justify-between my-3 text-[15px]">
              <p>Shipping fee</p>
              <p>free</p>
            </div>

            <hr />

            <div className="flex justify-between my-3 text-[15px] font-bold">
              <p>Total</p>
              <p>${getTotalAmount()}</p>
            </div>
          </div>

          <button className="w-full py-3 mt-4 bg-[#4CAF50] text-white rounded-[8px] text-[16px] cursor-pointer transition-colors duration-300 hover:bg-[#43a047]">
            Proceed to Checkout
          </button>
        </div>

        {/* Promo Code */}
        <div className="flex-1 min-w-[280px] p-5 border border-dashed border-[#bbb] rounded-[10px] bg-white">
          <p className="mb-[10px] text-[14px] text-[#333]">
            If you have a promo code, Enter it here
          </p>

          <div className="flex gap-[10px]">
            <input
              type="text"
              placeholder="Promo code"
              className="flex-1 p-[10px] rounded-[6px] border border-[#ccc] text-[14px] outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="px-4 py-[10px] rounded-[6px] bg-[#2196F3] text-white text-[14px] cursor-pointer transition-colors duration-300 hover:bg-[#1976D2]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItems;
