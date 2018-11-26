import React, { Component } from 'react';
import Navbar from './Components/navbar';
import './App.css';
import Login_feed from './Components/login_feed'
import 'materialize-css/dist/css/materialize.min.css';
import Cadastro from './Components/cadastro';
import {BrowserRouter as Router} from 'react-router-dom'
import Route from 'react-router-dom/Route';
import Navhome from './Components/navhome';

class App extends Component {
  render() {
    return (
      <Router>
        <div class = "App-link">
          <Route path="/" exact strict render={
            ()=>{
              return (
              <div>
                <Navbar/>
                <Login_feed/>
                <Cadastro/>
              </div>
              )
            }
          }/>
          <Route path="/home" exact strict render={
            ()=>{
            return (
            <div>
              <Navhome/>
            </div>
            )
            }
          }/>
        </div> 
      </Router>
      
    );
  }
}

export default App;
     
