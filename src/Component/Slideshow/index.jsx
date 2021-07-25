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
                        src="/img/banner1.jpeg"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        id="img"
                        src="/img/banner2.jpeg"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        id="img"
                        src="/img/banner3.jpeg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
        )

}
