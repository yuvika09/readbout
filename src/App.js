import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar.js';
import News from './Components/News';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />

          <Switch>
            <Route exact path="/" ><News key='general' pageSize={10} category='general' /></Route>
            <Route exact path="/business"><News key='business' pageSize={10} category='business' />Business</Route>
            <Route exact path="/entertainment"><News key='entertainment' pageSize={10} category='entertainment' />Entertainment</Route>
            <Route exact path="/health" ><News key='health' pageSize={10} category='health' />Health</Route>
            <Route exact path="/science"><News key='science' pageSize={10} category='science' />Science</Route>
            <Route exact path="/sports" ><News key='sports' pageSize={10} category='sports' />Sports</Route>
            <Route exact path="/technology" ><News key='technology' pageSize={10} category='technology' />Technology</Route>
          </Switch>
        </BrowserRouter>
      </div >
    )
  }
}
