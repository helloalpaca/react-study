import React, { Component } from 'react';

class Content extends Component {

    notyet(e) {
        e.preventDefault();
        alert('개발중입니다.');
    }

    render(){
      return (
        <div className="vsl-area" id="asap-content-area">
            <div className="vsl-tit-box">
                <h1 className="vsl-tit tg-fw700">
                    <strong className="vsl-tit-row__btm">ASAP</strong>
                </h1>
                <strong className="vsl-subtit tg-fw500 fs30">이용할 서비스를 선택해주세요.</strong>
            </div>
            <div className="cmnbtn-box">
            <div className="grid550">
                <a href="/send#!" title={this.props.title1} className="cmnbtn cmnbtn-blk__full" onClick={this.notyet}>
                    <span><img src={this.props.img1} alt={this.props.img1alt}
                        className="cmnbtn-img"></img></span><br />
                    <span className="cmnbtn-label">{this.props.title1}</span>
                </a>
                <div style={{ marginTop: '1.25rem' }}></div>
                <a href="/send#!" title={this.props.title2} className="cmnbtn cmnbtn-blk__full" onClick={this.notyet}>
                    <span><img src={this.props.img2} alt={this.props.img2alt}
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