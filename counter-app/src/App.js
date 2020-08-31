import React from 'react';
import Heading from './Components/Heading/Heading'
import Calculations from './Components/Logic/Calculations'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <div className="App">
      <Heading />
      <Calculations />
    </div>
  );
}

export default App;
