import React, { Component } from 'react';
import '../Style/navbar.css';

class Navbar extends Component {
    render() {
        return(
            <nav>
                <div class="nav-wrapper nav">
                <a href="#!" class="coco">For'sFood</a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul class="right hide-on-med-and-down nav">
                    {/* botar aqui o local de login */}
                    <a class="waves-effect waves-light btn grey">Entrar</a>
                </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar