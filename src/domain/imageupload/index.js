import React, { useState } from 'react';
import ImageUploader from '../../components/react-images-upload/index';
import Button from '../../components/button';

function ImageUpload() {
  const [pictures1, setPictures1] = useState([]);
  const [pictures2, setPictures2] = useState([]);
  const [pictures3, setPictures3] = useState([]);
  const [img1Loading, setImg1Loading] = useState(false);
  const [img2Loading, setImg2Loading] = useState(false);
  const [img3Loading, setImg3Loading] = useState(false);
  const [img1Uploading, setImg1Uploading] = useState(false);
  const [img2Uploading, setImg2Uploading] = useState(false);
  const [img3Uploading, setImg3Uploading] = useState(false);

  function onDrop(pictureFiles, pictureDataURLs) {}
  function onDrop1(pictureFiles, pictureDataURLs) {
    setPictures1(pictureFiles);

    if (pictureFiles.length === 0) {
      setImg1Loading(false);
    } else {
      setImg1Loading(true);
    }
  }

  function onDrop2(pictureFiles, pictureDataURLs) {
    setPictures2(pictureFiles);

    if (pictureFiles.length === 0) {
      setImg2Loading(false);
    } else {
      setImg2Loading(true);
    }
  }

  function onDrop3(pictureFiles, pictureDataURLs) {
    setPictures3(pictureFiles);

    if (pictureFiles.length === 0) {
      setImg3Loading(false);
    } else {
      setImg3Loading(true);
    }
  }

  function onClickButton(id) {
    console.log('button1 Clicked!');
    if (id === 1) {
      setImg1Uploading(true);
    } else if (id === 2) {
      setImg2Uploading(true);
    } else if (id === 3) {
      window.alert('HELLO, WORLD!');
    } else {
      console.log('WRONG BUTTON NUMBER');
    }
  }

  function onClick() {
    console.log('Server Connection Test');
    const formData = new FormData();
    formData.append('picture1', pictures1);
    formData.append('picture2', pictures2);
    formData.append('picture3', pictures3);
  }

  return (
    <main>
      <div className="container-fluid px-4">
        <h1 className="mt-4">Image Upload</h1>

        {!img1Uploading && (
          <ImageUploader
            withIcon={true}
            buttonText="사진1을 첨부합니다."
            onChange={onDrop1}
            imgExtension={['.jpg', '.png', '.jpeg']}
            maxFileSize={5242880}
            withPreview={true}
            singleImage={true}
            fileSizeError="파일 사이즈가 너무 큽니다."
            label="jpg, jpeg, png만 업로드 가능합니다."
          />
        )}
        {img1Loading && !img1Uploading && (
          <Button onClick={() => onClickButton(1)} />
        )}
        {img1Uploading && !img2Uploading && (
          <ImageUploader
            withIcon={true}
            buttonText="사진2를 첨부합니다."
            onChange={onDrop2}
            imgExtension={['.jpg', '.png', '.jpeg']}
            maxFileSize={5242880}
            withPreview={true}
            singleImage={true}
            fileSizeError="파일 사이즈가 너무 큽니다."
            label="jpg, jpeg, png만 업로드 가능합니다."
          />
        )}
        {img2Loading && !img2Uploading && (
          <Button onClick={() => onClickButton(2)} />
        )}
        {img1Uploading && img2Uploading && !img3Uploading && (
          <ImageUploader
            withIcon={true}
            buttonText="사진3을 첨부합니다."
            onChange={onDrop3}
            imgExtension={['.jpg', '.png', '.jpeg']}
            maxFileSize={5242880}
            withPreview={true}
            singleImage={true}
            fileSizeError="파일 사이즈가 너무 큽니다."
            label="jpg, jpeg, png만 업로드 가능합니다."
          />
        )}
        {img3Loading && !img3Uploading && (
          <Button onClick={() => onClickButton(3)} />
        )}
      </div>
    </main>
  );
}

export default ImageUpload;
