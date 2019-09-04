import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from './pages/index/index'
import About from './pages/about/about'
import Portfolio from './pages/portfolio/portfolio'
import Social from './pages/social/social'
import './App.css';

import Article from './pages/article/article'
// const routeBlog = (data) => {
//   data.blogPosts.map(({ uuid, Abstract, Title, date }) => (
//       <Route path={'/' + Title.replace(/ /g, "-")} exact render={() => (<Article/>)} />
//       // console.log('/' + Title.replace(/ /g, "-"))
//       ))
// }

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
      
      console.log("hi")
  }

  render() {
    return (
      <Router>
        <Route path="/" exact render={() => (<Index/>)} />
        <Route path="/about" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio}  /> 
        <Route path="/blog/:paramTitle" exact component={Article} />
        <Route path="/contact" exact component={Social}  /> 
      </Router>
    )
  }
}


