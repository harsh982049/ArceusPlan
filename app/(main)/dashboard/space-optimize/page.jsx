"use client";

import React, { useState } from "react";
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

const RoomGraph = () => {
  const [showGraph, setShowGraph] = useState(false);

  const layout = {
    dimensions: {
      length: 8.0,
      width: 3.5,
      height: 2.4,
    },
    walls: [
      { start: { x: 0, y: 0 }, end: { x: 8.0, y: 0 } },
      { start: { x: 8.0, y: 0 }, end: { x: 8.0, y: 3.5 } },
      { start: { x: 8.0, y: 3.5 }, end: { x: 0, y: 3.5 } },
      { start: { x: 0, y: 3.5 }, end: { x: 0, y: 0 } },
    ],
    doors: [{ x: 5.0, y: 2.0 }],
    windows: [
      { x: 6.5, y: 1.5 },
      { x: 1.0, y: 1.5 },
      { x: 2.5, y: 2.0 },
      { x: 6.0, y: 2.0 },
      { x: 1.5, y: 1.8 },
    ],
    features: {
      table: {
        top_left: { x: 2.0, y: 2.0 },
        bottom_right: { x: 3.2, y: 2.8 },
      },
      chairs: [
        {
          top_left: { x: 0.0, y: 2.0 },
          bottom_right: { x: 0.5, y: 2.5 },
        },
        {
          top_left: { x: 0.0, y: 0.0 },
          bottom_right: { x: 0.5, y: 0.5 },
        },
      ],
    },
  };

  const walls = layout.walls.map((wall, index) => ({
    id: `Wall ${index + 1}`,
    x1: wall.start.x,
    y1: wall.start.y,
    x2: wall.end.x,
    y2: wall.end.y,
  }));

  const doors = layout.doors.map((door, index) => ({
    id: `Door ${index + 1}`,
    x: door.x,
    y: door.y,
  }));

  const windows = layout.windows.map((window, index) => ({
    id: `Window ${index + 1}`,
    x: window.x,
    y: window.y,
  }));

  const furniture = [];
  const { table, chairs } = layout.features;

  // Add table
  furniture.push({
    id: "Table",
    x: (table.top_left.x + table.bottom_right.x) / 2,
    y: (table.top_left.y + table.bottom_right.y) / 2,
  });

  // Add chairs
  chairs.forEach((chair, index) => {
    furniture.push({
      id: `Chair ${index + 1}`,
      x: (chair.top_left.x + chair.bottom_right.x) / 2,
      y: (chair.top_left.y + chair.bottom_right.y) / 2,
    });
  });

  const handleSpaceOptimize = () => {
    setShowGraph(true);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Space Optimization</h2>
      <div className="text-center mb-6">
        <Button
          onClick={handleSpaceOptimize}
          className="bg-black text-white hover:bg-gray-800"
        >
          Space Optimize
        </Button>
      </div>

      {showGraph && (
        <ResponsiveContainer width="100%" height={500}>
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              type="number"
              dataKey="x"
              name="X (m)"
              unit="m"
              domain={[0, layout.dimensions.length]}
            />
            <YAxis
              type="number"
              dataKey="y"
              name="Y (m)"
              unit="m"
              domain={[0, layout.dimensions.width]}
            />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Legend />

            {/* Walls */}
            {walls.map((wall, index) => (
              <Scatter
                key={`Wall-${index}`}
                name={wall.id}
                data={[
                  { x: wall.x1, y: wall.y1 },
                  { x: wall.x2, y: wall.y2 },
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
      )}
    </div>
  );
};

export default RoomGraph;
