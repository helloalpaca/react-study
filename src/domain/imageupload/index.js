import React, {Component} from 'react';
import ImageUploader from '../../components/react-images-upload/index';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      pictures1: [],
      pictures2: [],
      picture3: [],
      img1Loading: false,
      img2Loading: false, 
      img3Loading: false
    };
    this.onDrop1 = this.onDrop1.bind(this);
    this.onDrop2 = this.onDrop2.bind(this);
    this.onDrop3 = this.onDrop3.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onDrop1(pictureFiles, pictureDataURLs) {
    this.setState({
      pictures1: pictureFiles,
      img1Loading: true,
    });
  }

  onDrop2(pictureFiles, pictureDataURLs) {
    this.setState({
      pictures2: pictureFiles,
      img2Loading: true,
    });
  }

  onDrop3(pictureFiles, pictureDataURLs) {
    this.setState({
      pictures3: pictureFiles,
      img3Loading: true,
    });
  }

  onClick(){
    console.log('Server Connection Test');
    const formData = new FormData();
    formData.append('picture1', this.state.pictures1);
    formData.append('picture2', this.state.pictures2);
    formData.append('picture3', this.state.pictures3);
  }

  render() {
    return (
      <main>
        <div className="container-fluid px-4">
          <h1 className="mt-4">Image Upload</h1>

      { !this.state.img1Loading && (
      
          <ImageUploader
                withIcon={true}
                buttonText='사진1을 첨부합니다.'
                onChange={this.onDrop1}
                imgExtension={['.jpg', '.png', '.jpeg']}
                maxFileSize={5242880}
                withPreview={true}
                singleImage={true}
                fileSizeError='파일 사이즈가 너무 큽니다.'
                label='jpg, jpeg, png만 업로드 가능합니다.'
            />  
      )}
      { ( this.state.img1Loading && !this.state.img2Loading) && (
          <ImageUploader
                withIcon={true}
                buttonText='사진2를 첨부합니다.'
                onChange={this.onDrop2}
                imgExtension={['.jpg', '.png', '.jpeg']}
                maxFileSize={5242880}
                withPreview={true}
                singleImage={true}
                fileSizeError='파일 사이즈가 너무 큽니다.'
                label='jpg, jpeg, png만 업로드 가능합니다.'
            />  
        )
      }
      {
        ( this.state.img1Loading && this.state.img2Loading && !this.state.img3Loading) && (
          <ImageUploader
                withIcon={true}
                buttonText='사진3을 첨부합니다.'
                onChange={this.onDrop2}
                imgExtension={['.jpg', '.png', '.jpeg']}
                maxFileSize={5242880}
                withPreview={true}
                singleImage={true}
                fileSizeError='파일 사이즈가 너무 큽니다.'
                label='jpg, jpeg, png만 업로드 가능합니다.'
            />  
        )
      }
    </div>
      </main>
    );
  }
}

export default ImageUpload;
