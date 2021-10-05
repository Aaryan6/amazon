import React from 'react'
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material"
import { sliderProduct } from '../../data'
import "./productSlider.css"

const ProductSlider = () => {
    return (
        <div className="product-slider">
            <KeyboardArrowLeft/>
            <span className="title">BlockBusters Deals</span>
            <div className="product-items">
                {sliderProduct.map(product=>{
                    return(
                <div className="product" key={product.id}>
                <img src={product.img} alt="" />
                <span className="price">{product.price}</span>
                </div>
                    )
                })}
            </div>
            <KeyboardArrowRight/>
        </div>
    )
}

export default ProductSlider
