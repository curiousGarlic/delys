import React from 'react';
import logo from './logo.png';
import './App.css';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    "number": {
      "value": 30,
      "density": {
        "enable": true,
        "value_area": 800
      }
    }
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          DE LYS
        </p>
        <p>
          creating beauty with light
        </p>
        <Particles className='particles' params={particlesOptions} />
        <a
          className="App-link"
          href="https://ens0.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          by enso
        </a>
      </header>
    </div>
  );
}

export default App;
