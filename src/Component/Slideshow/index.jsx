import React, { Component } from 'react'

import { Carousel } from 'react-bootstrap';

export class Slideshow extends Component {
    render() {
        return (
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/img/banner1.jpeg"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/img/banner2.jpeg"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="/img/banner3.jpeg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
        )
    }
}

export default Slideshow
