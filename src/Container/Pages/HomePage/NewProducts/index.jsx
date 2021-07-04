import React, { Component } from 'react'
import Slider from "react-slick";

import Product from './Product'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './style.css'

var slickSettings = {
    arrows: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <ArrowForwardIosIcon color="primary"/>,
    prevArrow: <ArrowBackIosIcon color="primary"/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


export class ProductSlideShow extends Component {
    render() {
        return (
            <>
                <div className="text-center mb-5">
                    <h2>New products</h2>
                </div>
                <Slider {...slickSettings}>
                    <div>
                        <Product
                            imgSrc="/img/Homepage/NewProduct/product1.jpeg"
                            imgAlt="product1"
                            name="VIMLE"
                            description="3-seat sofa, saxemara light blue"
                            price="$4690"
                        />
                    </div>
                    <div>
                        <Product
                            imgSrc="/img/Homepage/NewProduct/product2.jpeg"
                            imgAlt="product2"
                            name="LYCKSELE LÖVÅS"
                            description="Chair-bed, tutstad multicolour"
                            price="$1250"
                        />
                    </div>
                    <div>
                        <Product
                            imgSrc="/img/Homepage/NewProduct/product3.jpeg"
                            imgAlt="product3"
                            name="VEDBO"
                            description="Armchair, gunnared light green"
                            price="$1990"
                        />
                    </div>
                    <div>
                        <Product
                            imgSrc="/img/Homepage/NewProduct/product4.jpeg"
                            imgAlt="product4"
                            name="POÄNG"
                            description="Birch veneer/gisslarp cat pattern"
                            price="$450"
                        />
                    </div>
                </Slider>
            </>
        )
    }
}

export default ProductSlideShow
