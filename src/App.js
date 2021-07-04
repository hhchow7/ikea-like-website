import './App.css';

import { Container, Row, Col } from 'react-bootstrap';

import HeaderBar from './Container/HeaderBar'
import NavigationBar from './Container/NavigationBar'
import SlideShow from './Component/Slideshow'
import NewProducts from './Container/Pages/HomePage/NewProducts'

function App() {
  return (
    <div className="App">
      <HeaderBar/>
      <NavigationBar/>
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
    </div>
  );
}

export default App;
