import React, { Component } from 'react';
import '../Style/cadastro.css';

class Cadastro extends Component {
  render() {
    return (
      <div class="row col6 s6 l6">
        <div class="cadastro input-field">
          <h2>CADASTRE-SE</h2>
          <div>
            <label class="active" for="first_name2"><h5>E-mail</h5></label>
            <input id="first-name" type="text" class="validate" />
          </div>
          <div>
            <label class="active" for="first_name2"><h5>Senha</h5></label>
            <input id="first-name" type="text" class="validate" />
          </div>
          <div>
            <label class="active" for="first_name2"><h5>Confirmar senha</h5></label>
            <input id="first-name" type="text" class="validate" />
          </div>
          <div>
            <label><h5>Você é um:</h5></label>
            <select class="browser-default" disabled>
              <option value="" disabled selected></option>
              <option value="1">Competidor</option>
              <option value="2">Promotor</option>
              <option value="3">Fã</option>
            </select>

          </div>
        </div>
      </div>
    )
  }
}

export default Cadastro
