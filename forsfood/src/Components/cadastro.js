import React, { Component } from 'react';
import '../Style/cadastro.css';

class Cadastro extends Component {
  render() {
    return (
      <div class="row">
        <div class="cadastro input-field">
          <h3>CADASTRE-SE:</h3>
          <div class = "espaco"> 
            <label class="active txt" for="first_name2">E-mail</label>
            <input id="first-name incoco" type="text" class="validate"/>
          </div>
          <div class = "espaco">
            <label class="active txt" for="first_name2">Senha</label>
            <input id="password" type="password" class="validate"/>
          </div>
          <div class = "espaco">
            <label class="active txt" for="first_name2">Confirmar Senha</label>
            <input id="password" type="password" class="validate"/>
          </div>
          <div class = "espaco">
            <label class ="txt">Você é um:</label>
            <select class="browser-default option" able>
              <option value="" disabled selected></option>
              <option value="1">Competidor</option>
              <option value="2">Promotor</option>
              <option value="3">Fã</option>
            </select>
          </div>
          <div>
            <a href ="/home" class="waves-effect waves-light btn grey">Cadastrar</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Cadastro
