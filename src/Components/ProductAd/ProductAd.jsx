import React from 'react'
import "./productAd.css"

const ProductAd = () => {
    return (
        <>
        <div className="product-ads-container">
            <div className="signin-ad">
                <span className="title">Sign in for your best experience</span>
                <button className="button">Sign in securely</button>
            </div>
            <img src="/assets/lapad.jpg" className="ad-img" alt="" />
        </div>
        </>
    )
}

export default ProductAd
