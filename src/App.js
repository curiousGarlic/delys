import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          DELYS
        </h3>
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
