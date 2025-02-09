"use client";

import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import axios from "axios";

const ImageCapture = () => {
  const webcamRef = useRef(null);
  const router = useRouter();
  const [images, setImages] = useState([]);

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      setImages([...images, imageSrc]);
    }
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (images.length === 0) {
      alert("Please capture at least one image!");
      return;
    }

    try {
      const formData = new FormData();
      images.forEach((image, index) => {
        const blob = dataURItoBlob(image);
        formData.append(`file_${index}`, blob);
      });

      const response = await axios.post("http://127.0.0.1:5001/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data);
      
      router.push("/dashboard/room-scanning/layout-generation", { state: { layout: response.data } });
    } catch (error) {
      alert("Error uploading images.");
    }
  };

  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Capture Room Images</h2>
      <div className="mb-6">
        <Webcam
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="w-full max-w-lg mx-auto rounded-md"
        />
        <Button className="mt-4" onClick={captureImage}>
          Capture Image
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img src={image} alt={`Captured ${index + 1}`} className="w-full rounded-md" />
            <Button
              className="absolute top-2 right-2"
              onClick={() => removeImage(index)}
              variant="destructive"
            >
              Remove
            </Button>
          </div>
        ))}
      </div>

      <Button className="mt-6 w-full" onClick={handleSubmit}>
        Submit Images
      </Button>
    </div>
  );
};

export default ImageCapture;
