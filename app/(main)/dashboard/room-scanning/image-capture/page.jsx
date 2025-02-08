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

  // Capture an image and add it to the list
  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      setImages([...images, imageSrc]);
    }
  };

  // Remove an image from the list
  const removeImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  // Send captured images to the Gemini API
  const sendToGemini = async () => {
    if (images.length === 0) return alert("Capture at least one image first!");

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
      <h2 className="text-3xl font-bold mb-6">Capture Room Images</h2>
      <Card>
        <CardHeader>
          <CardTitle>Webcam</CardTitle>
        </CardHeader>
        <CardContent>
          <Webcam
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="rounded-md border"
            style={{ width: "100%", height: "auto" }}
          />
          <Button
            onClick={capture}
            className="mt-4 bg-green-600 text-white hover:bg-green-700"
          >
            Capture Image
          </Button>
        </CardContent>
      </Card>

      {/* Display Captured Images */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Captured Images</h3>
        {images.length === 0 && <p>No images captured yet.</p>}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt={`Captured ${index + 1}`}
                className="rounded-md shadow border"
              />
              <Button
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 bg-red-600 text-white hover:bg-red-700"
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
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
