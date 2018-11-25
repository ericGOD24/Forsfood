import React, { Component } from 'react';
import '../Style/login_feed.css';

class Login_feed extends Component {
  render() {
    return (
      <div class="col s12 m7">
        <div class="card horizontal">
          <div class="card-image">
            <img className="foto" src={require('../img/burgao.jpeg')} alt="Foto Burgao"/>
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <p>Irmão, eu sou a porra da descrição da competição.</p>
            </div>
            <div class="card-action">
              <a href="#">This is AMERICA</a>
            </div>
          </div>
        </div>
        <div class="card horizontal">
          <div class="card-image">
            <img src="https://lorempixel.com/100/190/nature/6" />
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <p>Irmão, eu sou a porra da descrição de alguma coisa.</p>
            </div>
            <div class="card-action">
              <a href="#">This is patrick</a>
            </div>
          </div>
        </div>
        <div class="card horizontal">
          <div class="card-image">
            <img src="https://lorempixel.com/100/190/nature/6" />
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <p>Irmão, eu sou a porra da descrição de alguma coisa.</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login_feed
