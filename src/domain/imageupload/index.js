import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import reactTriggerChange from 'react-trigger-change';

/* Custom Modules */
import ImageUploader from '../../components/react-images-upload/index';
import Button from '../../components/button';

function UploadImgInvoice(props) {
  const ref = useRef(null);

  useEffect(() => {
    if (props.pictures1) {
      console.log('props.pictures1: ' + props.pictures1);
      console.log('refContainer: ' + ref);
      reactTriggerChange(ref);
    }
  }, []);

  function onDrop1(pictureFiles, pictureDataURLs) {
    console.log('pictureFiles: ' + pictureFiles);
    props.setPictures1(pictureFiles);
  }

  function onClick() {
    console.log('Server Connection Test');
    const formData = new FormData();
    formData.append('picture1', props.pictures1);
  }

  return (
    <>
      <div className="container-fluid px-4">
        <ImageUploader
          ref={ref}
          subtitle="1/ 운송장 사진"
          title="밝은 곳에서 촬영하세요."
          withIcon={true}
          buttonText="사진1을 첨부합니다."
          onChange={onDrop1}
          imgExtension={['.jpg', '.png', '.jpeg']}
          maxFileSize={5242880}
          withPreview={true}
          singleImage={true}
          fileSizeError="파일 사이즈가 너무 큽니다."
          label="사진 첨부"
        />
        <Link to="/uploadImgProduct">
          <Button text="다음 단계" />
        </Link>
      </div>
    </>
  );
}

export default UploadImgInvoice;
