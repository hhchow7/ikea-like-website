import React, {useEffect } from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';

import HeaderBar from './Container/HeaderBar'
import NavigationBar from './Container/NavigationBar'

// pages
import HomePage from './Container/Pages/HomePage'
import Product from './Container/Pages/Products'
import News from './Container/Pages/News'

// import {useSelector, useDispatch} from 'react-redux'
// import {increment} from './redux/actions'
 

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
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/products" exact component={Product} />
        <Route path="/products/:id" exact component={Product} />
        <Route path="/news" exact component={News} />
      </Switch>
    </div>
  );
}

export default App;
