import React, { Component } from 'react';
import Navbar from './Components/navbar';
import './App.css';

import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
      </div>       
    );
  }
}

export default App;
     