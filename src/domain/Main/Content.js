import React, { Component } from 'react';

import imgB from '../../images/local_shipping_white_24dp.svg';
import imgC from '../../images/travel_explore_white_24dp.svg';

class Content extends Component {
    
    notyet() {
        console.log('개발중입니다.');
    }

    render(){
      return (
        <div className="vsl-area">
            <div className="vsl-tit-box">
                <h1 className="vsl-tit tg-fw700">
                    <strong className="vsl-tit-row__btm">ASAP</strong>
                </h1>
                <strong className="vsl-subtit tg-fw500 fs30">이용할 서비스를 선택해주세요.</strong>
            </div>
            <div className="cmnbtn-box">
                <div className="grid550">
                    <a href="#!" title="접수하기" className="cmnbtn cmnbtn-blk__full" id="testStart" onClick={this.notyet}>
                        <span><img src={imgB} alt="imgB"
                                className="cmnbtn-img"></img></span><br />
                        <span className="cmnbtn-label">{this.props.title1}</span>
                    </a>
                    <div style={{ marginTop: '1.25rem' }}></div>
                    <a href="#!" title="현황확인" className="cmnbtn cmnbtn-blk__full" id="testStart" onClick={this.notyet}>
                        <span><img src={imgC} alt="imgC"
                                className="cmnbtn-img"></img></span><br />
                        <span className="cmnbtn-label">{this.props.title2}</span>
                    </a>
                    <div style={{ marginTop: '1.25rem' }}></div>
                </div>
            </div>
        </div>
      );
    }
}

export default Content;