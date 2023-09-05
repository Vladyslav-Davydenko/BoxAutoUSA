import { useState } from "react"
import Product from "./Product/Product"

export default function Cart({onCartClose}){

    return (
        <div className="cart-cover" onClick={onCartClose}>
            <div className="cart-container">
                <div className="cart-title">
                    <h2 className="title">Cart</h2>
                    <button className="btn product-delete">
                        <svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="var(--dark-blue)" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="var(--dark-blue)" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>
                <div className="cart-products">
                    <Product 
                    description="Unde molest corrupti, illum dolorem dolore rem molestias laboriosam b"
                    price="1000000$"
                    image="src/assets/car4.jpeg"
                    />
                </div>
                <div className="cart-total-price">
                    <div className="cart-return">
                        <input type="submit" value="Continue Shopping" className={"btn btn--raised"}/>
                    </div>
                    <div className="cart-submit">
                        <span id="cart-number-price" className="text--lg">1000000$</span>
                        <input type="submit" value="Buy" className={"btn btn--raised"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}