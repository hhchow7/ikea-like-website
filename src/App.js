import './App.css';

import { Container, Row, Col } from 'react-bootstrap';

import HeaderBar from './Container/HeaderBar'
import NavigationBar from './Container/NavigationBar'
import SlideShow from './Component/Slideshow'
import ProductSlideShow from './Container/ProductSlideShow'

function App() {
  return (
    <div className="App">
      <HeaderBar/>
      <NavigationBar/>
      <Container fluid>
        <Row>
          <Col>
            <SlideShow/>
          </Col>
        </Row>
      </Container>
      <Container fluid className="mt-4 mb-4">
        <Row>
          <Col>
            <hr className="divider"/>
          </Col>
        </Row>
      </Container>
      <ProductSlideShow/>
    </div>
  );
}

export default App;
