import React, { Component } from 'react';

import imgA from '../images/kakao_login_large_narrow_start.png';

class Navbar extends Component {
    notyet(e) {
        e.preventDefault();
        alert('개발중입니다.');
    }

    render(){
      return (
        <div className="pos-f-t">
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                    <a href="#!" onClick={this.notyet}>
                        <img src={imgA} alt="imgA">
                        </img>
                    </a>
                </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        </div>
      );
    }
}

export default Navbar;