import { Container, Row, Col } from 'react-bootstrap';
import React, {useEffect } from 'react';
import './App.css';

import HeaderBar from './Container/HeaderBar'
import NavigationBar from './Container/NavigationBar'
import SlideShow from './Component/Slideshow'
import NewProducts from './Container/Pages/HomePage/NewProducts'

import {useSelector, useDispatch} from 'react-redux'
import {increment} from './redux/actions'
 

function App() {
  // const dispatch = useDispatch()
  // const counter = useSelector(state => state.counter)
  // console.log(counter)
  // useEffect(() => {
  //   dispatch(increment(5))
  // }, [])

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
