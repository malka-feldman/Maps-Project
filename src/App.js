// src/App.js
import React from 'react';
import './App.css';
import MapComponent from './MapComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Google Maps Example</h1>
        <MapComponent />
      </header>
    </div>
  );
}

export default App;
