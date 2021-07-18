import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import SlideShow from '../../../Component/Slideshow'
import NewProducts from '../../../Container/Pages/HomePage/NewProducts'

function HomePage() {
    return (
      <Container fluid>
        <Container>
            <Row>
              <Col>
                <SlideShow/>
              </Col>
            </Row>
        </Container>
        <hr className="divider"/>
        <NewProducts/>
        <hr className="divider"/>
      </Container>
    )
}

export default HomePage
