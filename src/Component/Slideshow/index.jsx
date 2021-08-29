import React from 'react'

import { Carousel } from 'react-bootstrap';

import './style.css'

export default function Slideshow() {

        return (
                <Carousel>
                    <Carousel.Item
                    >
                        <img
                        className="d-block w-100"
                        id="img"
                        src="/img/banner1.png"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        id="img"
                        src="/img/banner2.png"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        id="img"
                        src="/img/banner3.png"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
        )

}
