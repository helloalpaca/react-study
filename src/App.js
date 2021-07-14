import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/slick.css';
import './styles/style.css';
import './styles/content.css';
import './styles/bootstrap.css';

import imgA from './images/kakao_login_large_narrow_start.png';
import imgB from './images/local_shipping_white_24dp.svg';
import imgC from './images/travel_explore_white_24dp.svg';


class App extends Component {
  render(){
    return (
      <div>
        <div class="pos-f-t">
            <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-dark p-4">
                    <a href="#" onClick='notyet()'>
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
        <div>
            <div class="vsl-area">
                <div class="vsl-tit-box">
                    <h1 class="vsl-tit tg-fw700">
                        <strong class="vsl-tit-row__btm">ASAP</strong>
                    </h1>
                    <strong class="vsl-subtit tg-fw500 fs30">이용할 서비스를 선택해주세요.</strong>
                </div>
                <div class="cmnbtn-box">
                    <div class="grid550">
                        <a href="#" title="접수하기" class="cmnbtn cmnbtn-blk__full" id="testStart" onClick='notyet()'>
                            <span><img src={imgB}
                                    class="cmnbtn-img"></img></span><br />
                            <span class="cmnbtn-label">접수하기</span>
                        </a>
                        <div style={{ marginTop: '1.25rem' }}></div>
                        <a href="#" title="현황확인" class="cmnbtn cmnbtn-blk__full" id="testStart" onClick='notyet()'>
                            <span><img src={imgC}
                                    class="cmnbtn-img"></img></span><br />
                            <span class="cmnbtn-label">현황확인</span>
                        </a>
                        <div style={{ marginTop: '1.25rem' }}></div>
                    </div>
                </div>
            </div>
        </div>
        <footer class="lightgrey">
            <div class="grid">
                <div class="ft-info-box flex-box flex-spc__btw">
                    <p class="ft-info__txt fs16">COPYRIGHT ⓒ ASAP CO., LTD. ALL RIGHTS RESERVED.</p>
                    <a href="policy.html" class="ft-info__btn fs16">개인정보 처리방침</a>
                </div>
            </div>
        </footer>
      </div>
    );
  }
}

export default App;
