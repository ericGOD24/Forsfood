import React, { Component } from 'react';
import Navbar from './Components/navbar';
import './App.css';
import Login_feed from './Components/login_feed'

import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Login_feed/>
      </div>       
    );
  }
}

export default App;
     
