import React, { Component } from 'react';
import '../Style/login_feed.css';


class Login_feed extends Component {
  render() {
    return (
      <div class="col s12 m7">
        <div class="card horizontal caca">
          <div class="card-image">
            <img className="foto2" src={require('../img/burgao.jpeg')} alt="Foto Burgao"/>
          </div>
          <div class="card-stacked">
            <div class="card-content spc">
              <h4 class = "txt">Desafio Medievalanches</h4>
              <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
              <p>
                <i class="tiny material-icons">home</i>
                 restaurante: Medieval Lanches
              </p>
              <p>
                <i class="tiny material-icons">location_on</i>
                 Localização: Ceilandia Sul
              </p>
              <p>
                <i class="tiny material-icons">access_alarm</i>
                 tempo: 30 minutos (limite)
              </p>
              <p>
                <i class="tiny material-icons">room_service</i>
                 Peso: 1.5 Kg
              </p>
              <p>
                <i class="tiny material-icons">restaurant_menu</i>
                Número de vitórias: 2
              </p>
            </div>
            <div class="card-action">
              <a href="#">Clique aqui para mais detalhes</a>
            </div>
          </div>
        </div>

        <div class="card horizontal caca">
          <div class="card-image">
            <img className="foto2" src={require('../img/vermonster.jpg')} alt="Foto Vermonster"/>
          </div>
          <div class="card-stacked">
            <div class="card-content spc">
              <h4 class = "txt">Desafio Vermonster</h4>
              <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
              <p>
                <i class="tiny material-icons">home</i>
                restaurante: Ben & Jerry's
              </p>
              <p>
                <i class="tiny material-icons">location_on</i>
                Localização: Park Shopping
              </p>
              <p>
                <i class="tiny material-icons">access_alarm</i>
                tempo: 5 minutos (limite)
              </p>
              <p>
                <i class="tiny material-icons">room_service</i>
                Peso: 900 Kg
              </p>
              <p>
                <i class="tiny material-icons">restaurant_menu</i>
                Número de vitórias: 3
              </p>
            </div>
            <div class="card-action">
              <a href="#">Clique aqui para mais detalhes</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login_feed
