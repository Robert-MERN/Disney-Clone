import React from 'react'
import Styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider-badag.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-badging.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-scale.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-scales.jpg" />
            </Wrap>
        </Carousel> 
    )
}

export default ImageSlider

const Carousel = Styled(Slider)`
    margin-top: 20px;
    ul li button {
        &:before {
            font-size: 9px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        color:white;
    }

    .slick-list {
        overflow: visible;

    }
    button {
        z-index: 1;
    }
    
` 

const Wrap = Styled.div`
    cursor: pointer;
    img {
        border: 5px solid transparent;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 18px -10px;
        position: relative;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        &:hover {
            border: 5px solid gray;

        }
            
        }
`

