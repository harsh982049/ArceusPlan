"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const LayoutGeneration = () => {
  const [layoutData, setLayoutData] = useState(null);

  useEffect(() => {
    const fetchLayout = async () => {
      try {
        const response = await axios.get("/api/gemini");
        setLayoutData(response.data);
      } catch (error) {
        console.error("Error fetching layout data:", error);
      }
    };

    fetchLayout();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Room Layout</h2>
      {layoutData ? (
        <div className="border p-4 rounded bg-white shadow">
          <h3 className="text-lg font-semibold mb-4">2D Layout</h3>
          <pre>{JSON.stringify(layoutData, null, 2)}</pre>
          {/* Add visualization of layoutData using SVG or Canvas */}
        </div>
      ) : (
        <p>Loading layout...</p>
      )}
    </div>
  );
};

export default LayoutGeneration;
