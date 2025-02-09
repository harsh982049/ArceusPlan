import axios from "axios";

// API call for image uploads (used for capture and upload routes)
export const sendImagesToGemini = async (images) => {
  try {
    const formData = new FormData();
    images.forEach((image, index) => {
      formData.append(`file_${index}`, dataURItoBlob(image));
    });

    const response = await axios.post("http://127.0.0.1:5001/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data; // JSON data from Gemini
  } catch (error) {
    console.error("Error uploading images:", error);
    throw error;
  }
};

// API call for dimensions route
export const sendDimensionsToGemini = async (dimensions) => {
  try {
    const response = await axios.post("http://127.0.0.1:5001/dimensions", dimensions, {
      headers: { "Content-Type": "application/json" },
    });

    return response.data; // JSON data from Gemini
  } catch (error) {
    console.error("Error sending dimensions:", error);
    throw error;
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
