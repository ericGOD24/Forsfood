import React, { Component } from 'react';
import '../Style/navbar.css';

class Navbar extends Component {
    render() {
        return(
            <nav>
                <div class="nav-wrapper nav">
                <a href="#!" class="coco">For'sFood</a>
                    <ul class="right hide-on-med-and-down nav">
                        <li>
                            <div class="row">
                                <div class="input-field col s10">
                                <input id="first_name2" type="text" class="validate"/>
                                <label class="active " for="first_name2">Login</label>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="row">
                                <div class="input-field col s10">
                                <input id="first_name2" type="text" class="validate"/>
                                <label class="active" for="first_name2">Senha</label>
                                </div>
                            </div>
                        </li>
                        <li><a class="waves-effect waves-light btn grey">Entrar</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar