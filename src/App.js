import React, { Component } from 'react';
import './App.css';
import HCardBuilder from './components/HCardBuilder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HCardBuilder />
      </div>
    );
  }
}

export default App;
