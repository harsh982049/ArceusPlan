"use client"

import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";

const CaptureImage = () => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  };

  const uploadImage = async () => {
    if (!image) return alert("Capture an image first!");

    const formData = new FormData();
    formData.append("file", dataURItoBlob(image));

    try {
      await axios.post("/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  const dataURItoBlob = (dataURI) => {
    let byteString = atob(dataURI.split(",")[1]);
    let mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    let ab = new ArrayBuffer(byteString.length);
    let ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  return (
    <div>
      <h2>Capture Room Image</h2>
      <Webcam ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={capture}>Capture</button>
      {image && <img src={image} alt="Captured" style={{ width: "300px" }} />}
      <button onClick={uploadImage}>Upload</button>
    </div>
  );
};

export default CaptureImage;