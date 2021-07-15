import React, { Component } from 'react';

import imgA from '../images/kakao_login_large_narrow_start.png';

class Navbar extends Component {
    render(){
      return (
        <div class="pos-f-t">
            <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-dark p-4">
                    <a href="" onClick='notyet()'>
                        <img src={imgA}>
                        </img>
                    </a>
                </div>
            </div>
            <nav class="navbar navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
        </div>
      );
    }
}

export default Navbar;