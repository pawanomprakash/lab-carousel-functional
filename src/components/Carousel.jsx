import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    console.log(images)
    const [i,setI]=useState(0)

    return (
        <div className="carousel-container" style={{backgroundImage:`url(${images[i].img})`}}>
            <div id="left-arrow" onClick={()=>{setI(i=>(i+2)%3)}}><ArrowBackIosIcon/></div>
                <div className="container">
                    <h1>{images[i].title}</h1>
                    <h3>{images[i].subtitle}</h3>
                </div>
            <div id="right-arrow" onClick={()=>{setI(i=>(i+1)%3)}}><ArrowForwardIosIcon/></div>
        </div>
      )
}

export default Carousel;

