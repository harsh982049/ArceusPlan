"use client";

import React, { useState, useRef } from "react";
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const layout = {
  dimensions: {
    length: 8.0,
    width: 3.5,
    height: 2.4,
  },
  walls: [
    {
      start: { x: 0, y: 0 },
      end: { x: 8.0, y: 0 },
    },
    {
      start: { x: 8.0, y: 0 },
      end: { x: 8.0, y: 3.5 },
    },
    {
      start: { x: 8.0, y: 3.5 },
      end: { x: 0, y: 3.5 },
    },
    {
      start: { x: 0, y: 3.5 },
      end: { x: 0, y: 0 },
    },
  ],
  doors: [
    {
      x: 5.0,
      y: 2.0,
    },
  ],
  windows: [
    {
      x: 6.5,
      y: 1.5,
    },
    {
      x: 1.0,
      y: 1.5,
    },
  ],
  furniture: [
    {
      x: 4.0,
      y: 2.0,
    },
    {
      x: 3.0,
      y: 1.5,
    },
  ],
};

const RoomLayout = () => {
  const [furniture, setFurniture] = useState(layout.furniture || []);
  const [windows, setWindows] = useState(layout.windows || []);
  const [doors, setDoors] = useState(layout.doors || []);
  const [selectedType, setSelectedType] = useState("furniture");
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const chartRef = useRef(null); // Reference to the chart container

  const handleAddFeature = () => {
    if (x === "" || y === "") {
      alert("Please enter valid coordinates!");
      return;
    }

    const newFeature = {
      x: parseFloat(x),
      y: parseFloat(y),
    };

    if (selectedType === "furniture") {
      setFurniture((prev) => [...prev, newFeature]);
    } else if (selectedType === "window") {
      setWindows((prev) => [...prev, newFeature]);
    } else if (selectedType === "door") {
      setDoors((prev) => [...prev, newFeature]);
    }

    setX("");
    setY("");
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const downloadPDF = async () => {
    if (chartRef.current) {
      const canvas = await html2canvas(chartRef.current);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save("room-layout.pdf");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Room Layout Visualization</h2>
      <div className="mb-6">
        <p>
          Below is the visual representation of the room layout. Use the form below to manually add features like
          furniture, windows, or doors by specifying their coordinates. You can also download the layout as a PDF.
        </p>
      </div>

      {/* Type Selector */}
      <div className="flex gap-4 mb-4">
        <Button
          variant={selectedType === "furniture" ? "default" : "outline"}
          onClick={() => handleTypeChange("furniture")}
        >
          Add Furniture
        </Button>
        <Button
          variant={selectedType === "window" ? "default" : "outline"}
          onClick={() => handleTypeChange("window")}
        >
          Add Window
        </Button>
        <Button
          variant={selectedType === "door" ? "default" : "outline"}
          onClick={() => handleTypeChange("door")}
        >
          Add Door
        </Button>
      </div>

      {/* Input Form */}
      <div className="mb-6 flex gap-4">
        <div>
          <Label htmlFor="x-coordinate">X Coordinate (m):</Label>
          <Input
            id="x-coordinate"
            type="number"
            value={x}
            onChange={(e) => setX(e.target.value)}
            className="w-full"
          />
        </div>
        <div>
          <Label htmlFor="y-coordinate">Y Coordinate (m):</Label>
          <Input
            id="y-coordinate"
            type="number"
            value={y}
            onChange={(e) => setY(e.target.value)}
            className="w-full"
          />
        </div>
        <Button onClick={handleAddFeature} className="self-end">
          Add {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}
        </Button>
      </div>

      {/* Chart Section */}
      <div ref={chartRef}>
        <ResponsiveContainer width="100%" height={500}>
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" dataKey="x" name="X (m)" unit="m" domain={[0, layout.dimensions.length]} />
            <YAxis type="number" dataKey="y" name="Y (m)" unit="m" domain={[0, layout.dimensions.width]} />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Legend />

            {/* Walls */}
            {layout.walls.map((wall, index) => (
              <Scatter
                key={`Wall-${index}`}
                name={`Wall ${index + 1}`}
                data={[
                  { x: wall.start.x, y: wall.start.y },
                  { x: wall.end.x, y: wall.end.y },
                ]}
                line
                fill="#8884d8"
              />
            ))}

            {/* Doors */}
            <Scatter name="Doors" data={doors} fill="#FF0000" />

            {/* Windows */}
            <Scatter name="Windows" data={windows} fill="#0000FF" />

            {/* Furniture */}
            <Scatter name="Furniture" data={furniture} fill="#00FF00" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      {/* Download Button */}
      <Button className="mt-6" onClick={downloadPDF}>
        Download as PDF
      </Button>
    </div>
  );
};

export default RoomLayout;
