import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import Timeline from './components/Timeline';
class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar />
          <div id="colorlib-main">
            <Introduction />
            <About></About>
            <Timeline />
            <Projects />
            <Blog />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
