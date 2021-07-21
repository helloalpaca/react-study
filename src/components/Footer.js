import React, { Component } from 'react';

class Footer extends Component {
    render(){
      return (
        <footer className="lightgrey">
            <div className="grid">
                <div className="ft-info-box flex-box flex-spc__btw">
                    <p className="ft-info__txt fs16">COPYRIGHT ⓒ ASAP CO., LTD. ALL RIGHTS RESERVED.</p>
                    <a href="/policy" className="ft-info__btn fs16">개인정보 처리방침</a>
                </div>
            </div>
        </footer>
      );
    }
}

export default Footer;