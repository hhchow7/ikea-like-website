import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HeaderBar from "./Container/HeaderBar";
import NavigationBar from "./Container/NavigationBar";

// pages
import HomePage from "./Container/Pages/HomePage";
import Product from "./Container/Pages/Products";
import News from "./Container/Pages/News";
import Feedback from "./Container/Pages/FeedBack";

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/products" exact component={Product} />
        <Route path="/products/:id" exact component={Product} />
        <Route path="/news" exact component={News} />
        <Route path="/feedback" exact component={Feedback} />
      </Switch>
    </div>
  );
}

export default App;
