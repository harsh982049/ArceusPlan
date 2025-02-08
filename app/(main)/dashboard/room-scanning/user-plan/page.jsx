"use client";

import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const FloorPlanEditor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let fabric;
    const loadFabric = async () => {
      const module = await import("fabric");
      fabric = module.fabric;

      if (!fabric) return console.error("Fabric.js could not be loaded.");

      // Initialize canvas
      const canvas = new fabric.Canvas(canvasRef.current, {
        height: 500,
        width: 800,
        backgroundColor: "#f3f3f3",
      });

      // Add wall tool
      document.getElementById("addWall").onclick = () => {
        const wall = new fabric.Rect({
          left: 50,
          top: 50,
          width: 150,
          height: 20,
          fill: "gray",
          stroke: "black",
          strokeWidth: 2,
          selectable: true,
        });
        canvas.add(wall);
      };

      // Add furniture tool
      document.getElementById("addFurniture").onclick = () => {
        const furniture = new fabric.Circle({
          left: 100,
          top: 100,
          radius: 30,
          fill: "blue",
          stroke: "black",
          strokeWidth: 2,
          selectable: true,
        });
        canvas.add(furniture);
      };

      // Enable selection and movement
      canvas.on("object:modified", (e) => {
        console.log("Modified object:", e.target);
      });

      // Clear canvas
      document.getElementById("clearCanvas").onclick = () => {
        canvas.clear();
        canvas.setBackgroundColor("#f3f3f3", canvas.renderAll.bind(canvas));
      };
    };

    loadFabric();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Design Your Floor Plan</h2>
      <div className="mb-4">
        <button id="addWall" className="px-4 py-2 bg-gray-700 text-white rounded mr-4">
          Add Wall
        </button>
        <button
          id="addFurniture"
          className="px-4 py-2 bg-blue-600 text-white rounded mr-4"
        >
          Add Furniture
        </button>
        <button id="clearCanvas" className="px-4 py-2 bg-red-500 text-white rounded">
          Clear Canvas
        </button>
      </div>
      <canvas ref={canvasRef} id="floorCanvas" className="border"></canvas>
    </div>
  );
};

export default FloorPlanEditor;
