"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";

const UploadImages = () => {
  const router = useRouter();
  const [images, setImages] = useState([]);

  const handleFileUpload = (event) => {
    const files = event.target.files;
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImages((prev) => [...prev, reader.result]);
      };
    });
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    router.push(`/dashboard/room-scanning/graph`);
  }

//   const handleSubmit = async () => {
//     if (images.length === 0) {
//       alert("Please upload at least one image!");
//       return;
//     }

//     try {
//       const formData = new FormData();
//       images.forEach((image, index) => {
//         const blob = dataURItoBlob(image);
//         formData.append(`file_${index}`, blob);
//       });

//       const response = await axios.post("http://127.0.0.1:5001/upload", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       // Encode JSON response as a query parameter
//       const layout = encodeURIComponent(JSON.stringify(response.data));
//       console.log(layout);

//       // Navigate with query parameter
//       router.push(`/dashboard/room-scanning/layout-generation?layout=${layout}`);
//     } catch (error) {
//       alert("Error uploading images.");
//     }
//   };

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
      <h2 className="text-3xl font-bold mb-6">Upload Room Images</h2>
      <Input
        type="file"
        multiple
        accept="image/jpeg, image/png"
        onChange={handleFileUpload}
        className="mb-6"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img src={image} alt={`Uploaded ${index + 1}`} className="w-full rounded-md" />
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

export default UploadImages;
