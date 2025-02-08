"use client";

import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import axios from "axios";

const CaptureImages = () => {
  const webcamRef = useRef(null);
  const router = useRouter();
  const [images, setImages] = useState([]);

  // Capture an image from the webcam
  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      setImages([...images, imageSrc]);
    }
  };

  // Remove an image
  const removeImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  // Handle file upload
  const handleFileUpload = (event) => {
    const files = event.target.files;
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImages((prevImages) => [...prevImages, reader.result]);
      };
    });
  };

  // Send images to the Gemini API
  const sendToGemini = async () => {
    if (images.length === 0) {
      alert("Please capture or upload at least one image!");
      return;
    }

    try {
      const formData = new FormData();
      images.forEach((image, index) => {
        formData.append(`file_${index}`, dataURItoBlob(image));
      });

      // POST to Gemini API endpoint
      const response = await axios.post("/api/gemini", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 200) {
        alert("Images successfully sent to Gemini API!");
        router.push("/dashboard/room-scanning/layout-generation");
      } else {
        alert("Failed to send images to Gemini API.");
      }
    } catch (error) {
      console.error("Error sending images:", error);
      alert("An error occurred while sending images.");
    }
  };

  // Helper: Convert Data URI to Blob
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
      <h2 className="text-3xl font-bold mb-6">Capture or Upload Room Images</h2>

      {/* Webcam */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Webcam</CardTitle>
        </CardHeader>
        <CardContent>
          <Webcam
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="rounded-md border"
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "300px",
              margin: "0 auto",
            }}
          />
          <Button
            onClick={capture}
            className="mt-4 bg-green-600 text-white hover:bg-green-700"
          >
            Capture Image
          </Button>
        </CardContent>
      </Card>

      {/* File Uploader */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Upload Images</h3>
        <input
          type="file"
          multiple
          accept="image/jpeg, image/png, image/jpg"
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onChange={handleFileUpload}
        />
      </div>

      {/* Display Captured/Uploaded Images */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Captured or Uploaded Images</h3>
        {images.length === 0 ? (
          <p className="text-gray-600">No images captured or uploaded yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <Card key={index} className="relative">
                <img
                  src={image}
                  alt={`Captured ${index + 1}`}
                  className="rounded-md w-full h-auto"
                />
                <Button
                  onClick={() => removeImage(index)}
                  className="absolute top-2 right-2 bg-red-600 text-white hover:bg-red-700"
                >
                  Remove
                </Button>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Send Images to Gemini */}
      <div className="mt-8">
        <Button
          onClick={sendToGemini}
          className="bg-blue-600 text-white hover:bg-blue-700 w-full py-3"
        >
          Send to Gemini API
        </Button>
      </div>
    </div>
  );
};

export default CaptureImages;
