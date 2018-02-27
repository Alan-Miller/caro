import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import one from './imgs/one.jpg'
import two from './imgs/two.jpg'
import SimpleSlider from './SimpleSlider';

class App extends Component {
  render() {
    
    return (
      <div className="App">

        <SimpleSlider />

      </div>
    );
  }
}

export default App;
