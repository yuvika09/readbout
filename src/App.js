import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar.js';
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        Hello this is class component
        <Navbar/>
        <News/>
      </div>
    )
  }
}
