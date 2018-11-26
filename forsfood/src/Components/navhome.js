import React, { Component } from 'react';
import '../Style/navhome.css';

class Navhome extends Component {
    render() {
        return(
            <nav>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                <div class="nav-wrapper navhome">
                <a href="#!" class="fonte">For'sFood</a>
                    <ul class="right hide-on-med-and-down">
                        <li>
                            <nav>
                                <div class="nav-wrapper pesquisa">
                                    <form>
                                        <div class="input-field">
                                            <input id="search" type="search" required/>
                                            <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                                            <i class="material-icons">close</i>
                                        </div>
                                    </form>
                                </div>
                            </nav>
                        </li>
                        <li>
                            <img href = "/perfil"class="circle responsive-img foto" alt ="foto perfil" src={require('../img/erico.jpg')}/>
                        </li>
                        <li><a href="/perfil"><i class="material-icons">more_vert</i></a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navhome