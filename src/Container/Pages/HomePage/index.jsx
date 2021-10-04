import React from 'react'
import { Container } from 'react-bootstrap';

import SlideShow from '../../../Component/Slideshow'
import NewProducts from '../../../Container/Pages/HomePage/NewProducts'

function HomePage() {
    return (
      <Container fluid>
        <div className="section-wrapper">
          <SlideShow/>
        </div>
        <hr className="divider"/>
        <NewProducts/>
        <hr className="divider mt-5"/>
      </Container>
    )
}

export default HomePage
