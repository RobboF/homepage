import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from './pages/index/index'
import About from './pages/about/about'
import Portfolio from './pages/portfolio/portfolio'
import Social from './pages/social/social'
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Route path="/" exact render={() => (<Index/>)} />
        <Route path="/about" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio}  /> 
        <Route path="/contact" exact component={Social}  /> 
      </Router>
    )
  }
}


