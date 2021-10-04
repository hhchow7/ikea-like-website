import React, { useState, useEffect } from 'react'
import Slider from "react-slick";

import axios from '../../../../api';
import Product from './Product'
import QuickViewDialog from './QuickViewDialog'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './style.scss'

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
          infinite: false,
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


export default function ProductSlideShow() {

    const [products, setProducts] = useState([])
    const [openQuickViewDialog, setOpenQuickViewDialog] = useState(false)

    useEffect(() => {
      async function fetchData() {
          const response = await axios.get('/products');
          setProducts(response.data)
      }
      fetchData()
  }, []);

    function quickView(product) {
      // setOpenQuickViewDialog(true)
      console.log(product)
      console.log("quickView")
    }
  
    return (
        <>
            <div className="text-center mb-5">
                <h2>New products</h2>
            </div>
            <Slider {...slickSettings}>
              {
                products.map(product => {
                  return (
                    <div key={product.id}>
                      <Product
                        id={product.id}
                        imgSrc={product.src}
                        imgAlt={product.alt}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        quickViewFunction={()=>{quickView(product)}}
                      />
                    </div>
                  )
                })
              }
            </Slider>
            {openQuickViewDialog?
                <QuickViewDialog
                    open={openQuickViewDialog}
                    handleClose={()=>{setOpenQuickViewDialog(false)}}
                />
                :
                ""
            }
        </>
    )
}

