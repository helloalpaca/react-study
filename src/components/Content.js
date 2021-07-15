import React, { Component } from 'react';

import imgB from '../images/local_shipping_white_24dp.svg';
import imgC from '../images/travel_explore_white_24dp.svg';

class Content extends Component {
    render(){
      return (
        <div class="vsl-area">
            <div class="vsl-tit-box">
                <h1 class="vsl-tit tg-fw700">
                    <strong class="vsl-tit-row__btm">ASAP</strong>
                </h1>
                <strong class="vsl-subtit tg-fw500 fs30">이용할 서비스를 선택해주세요.</strong>
            </div>
            <div class="cmnbtn-box">
                <div class="grid550">
                    <a href="" title="접수하기" class="cmnbtn cmnbtn-blk__full" id="testStart" onClick='notyet()'>
                        <span><img src={imgB}
                                class="cmnbtn-img"></img></span><br />
                        <span class="cmnbtn-label">접수하기</span>
                    </a>
                    <div style={{ marginTop: '1.25rem' }}></div>
                    <a href="" title="현황확인" class="cmnbtn cmnbtn-blk__full" id="testStart" onClick='notyet()'>
                        <span><img src={imgC}
                                class="cmnbtn-img"></img></span><br />
                        <span class="cmnbtn-label">현황확인</span>
                    </a>
                    <div style={{ marginTop: '1.25rem' }}></div>
                </div>
            </div>
        </div>
      );
    }
}

export default Content;