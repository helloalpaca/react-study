import React, {Component} from 'react';

import img from '../../images/image.png';

class Image extends Component {
  render(){
    return (
      <main>
        <div className="container-fluid px-4">
          <h1 className="mt-4">Image</h1>
        </div>
        <img src={img} alt="내 이미지" />
        <img src={require('../../images/image2.png').default} alt="내 이미지" />

      </main>
    );
  }
}

export default Image;
