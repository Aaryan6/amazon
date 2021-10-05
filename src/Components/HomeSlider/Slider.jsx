import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import React, { useState } from 'react'
import "./slider.css"
import {SlideImages} from "../../data"

const Slider = () => {
    const [ slideIndex, setSlideIndex] = useState(0)
    const slideImage = (direction) =>{
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3)
        }else{
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0)
        }
    }
    return (
        <div className="home-slider-container">
            <ArrowBackIos className="slider-arrow left" onClick={()=>slideImage("left")}/>
            <div className="home-slider-images">
                {SlideImages.map((item)=>(
                    <img src={item.img} alt="" key={item.id} style={{transform: `translateX(${slideIndex * -100}%)`}}/>
                ))}
            </div>
            <ArrowForwardIos className="slider-arrow right" onClick={()=>slideImage("right")}/>
        </div>
    )
}

export default Slider
