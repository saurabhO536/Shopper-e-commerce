import React, { createContext, useState } from "react";
import all_product from '../../assets/all_product';


export let ShopContext= createContext()

let getDefaultData=()=>{
    let cart={}
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
        
    }
    return cart
}

export let ShopContextProvider = (props)=>{

    
    let[cartItems , setCartItems] = useState(getDefaultData())
    console.log(cartItems)
    
    let addToCart= (itemId)=>{
        console.log(itemId);
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    let removeCart= (itemId)=>{
        
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        console.log(itemId);
    }

    let getTotalAmount= ()=>{
        let totalAmount= 0;
        for (let item in cartItems){
            if(cartItems[item] > 0 ){
                let indexInfo = all_product.find((product)=>product.id===Number(item));
                totalAmount += indexInfo.new_price * cartItems[item] 
            }
        }
        return totalAmount;
    }


    let getTotalItem =()=>{
        let totalItems = 0;
        for(let item in cartItems){
            if(cartItems[item] > 0){
                totalItems += cartItems[item]
            }
        }
        return totalItems
    }
    
    let contextApi= {getTotalItem, getTotalAmount, all_product, cartItems, addToCart,removeCart} 

    return<>
    <ShopContext.Provider value={contextApi}>
        {props.children}
    </ShopContext.Provider>
    </>
}