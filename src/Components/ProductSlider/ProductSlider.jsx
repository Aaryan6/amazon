import React, { useState } from 'react'
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material"
import { sliderProduct } from '../../data'
import "./productSlider.css"
import { Link } from 'react-router-dom'

const ProductSlider = () => {
    const [ slideIndex, setSlideIndex] = useState(0)
    const slideProduct = (direction) =>{
        if(direction==="left"){
            setSlideIndex(0)
        }else{
            setSlideIndex(85)
        }
    }
    return (
        <div className="product-slider">
            <KeyboardArrowLeft onClick={()=>slideProduct("left")} className="product-slider-arrow left"/>
            <span className="title">BlockBusters Deals</span>
            <div className="product-items" style={{transform: `translateX(-${slideIndex}%)`}}>
                {sliderProduct.map(product=>{
                    return(
                        <Link to="/product-view" style={{textDecoration: "none"}} key={product.id}>
                <div className="product" key={product.id}>
                <img src={product.img} alt="" />
                <span className="price">{product.price}</span>
                </div>
                </Link>
                    )
                })}
            </div>
            <KeyboardArrowRight onClick={()=>slideProduct("right")} className="product-slider-arrow right"/>
        </div>
    )
}

export default ProductSlider
