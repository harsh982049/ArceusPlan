// // "use client";

// // import React, { useEffect, useState } from "react";
// // import { useSearchParams } from "next/navigation";
// // import { Button } from "@/components/ui/button";
// // import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

// // const LayoutGeneration = () => {
// //   const searchParams = useSearchParams();
// //   const [layout, setLayout] = useState(null);

// //   useEffect(() => {
// //     const layoutData = JSON.parse(searchParams.get("state")).layout;
// //     setLayout(layoutData);
// //   }, [searchParams]);

// //   if (!layout) {
// //     return <p>Loading layout...</p>;
// //   }

// //   // Extract data for walls, doors, and windows
// //   const walls = layout.walls.map((wall, index) => ({
// //     id: `Wall ${index + 1}`,
// //     x1: wall.start.x,
// //     y1: wall.start.y,
// //     x2: wall.end.x,
// //     y2: wall.end.y,
// //   }));

// //   const doors = layout.doors.map((door, index) => ({
// //     id: `Door ${index + 1}`,
// //     x: door.x,
// //     y: door.y,
// //   }));

// //   const windows = layout.windows.map((window, index) => ({
// //     id: `Window ${index + 1}`,
// //     x: window.x,
// //     y: window.y,
// //   }));

// //   const furniture = layout.furniture.map((item, index) => ({
// //     id: `${item.type} ${index + 1}`,
// //     x: item.location.x,
// //     y: item.location.y,
// //   }));

// //   return (
// //     <div className="p-6 bg-gray-100 min-h-screen">
// //       <h2 className="text-3xl font-bold mb-6">Room Layout</h2>
// //       <div className="mb-6">
// //         <p>Below is the visual representation of the room layout based on the JSON data:</p>
// //       </div>

// //       {/* Chart Section */}
// //       <ResponsiveContainer width="100%" height={400}>
// //         <ScatterChart>
// //           <CartesianGrid strokeDasharray="3 3" />
// //           <XAxis type="number" dataKey="x" name="X" unit="m" />
// //           <YAxis type="number" dataKey="y" name="Y" unit="m" />
// //           <Tooltip cursor={{ strokeDasharray: "3 3" }} />
// //           <Legend />

// //           {/* Walls */}
// //           {walls.map((wall) => (
// //             <Scatter
// //               key={wall.id}
// //               name={wall.id}
// //               data={[
// //                 { x: wall.x1, y: wall.y1 },
// //                 { x: wall.x2, y: wall.y2 },
// //               ]}
// //               line
// //               fill="#8884d8"
// //             />
// //           ))}

// //           {/* Doors */}
// //           <Scatter name="Doors" data={doors} fill="#FF0000" />

// //           {/* Windows */}
// //           <Scatter name="Windows" data={windows} fill="#0000FF" />

// //           {/* Furniture */}
// //           <Scatter name="Furniture" data={furniture} fill="#00FF00" />
// //         </ScatterChart>
// //       </ResponsiveContainer>

// //       <Button className="mt-6" onClick={() => window.history.back()}>
// //         Go Back
// //       </Button>
// //     </div>
// //   );
// // };

// // export default LayoutGeneration;
// // // "use client";

// // // import React, { useEffect, useState } from "react";
// // // import { useSearchParams } from "next/navigation";
// // // import { Button } from "@/components/ui/button";
// // // import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

// // // const LayoutGeneration = () => {
// // //   const searchParams = useSearchParams();
// // //   const [layout, setLayout] = useState(null);

// // //   useEffect(() => {
// // //     const layoutData = JSON.parse(searchParams.get("state")).layout;
// // //     setLayout(layoutData);
// // //   }, [searchParams]);

// // //   if (!layout) {
// // //     return <p>Loading layout...</p>;
// // //   }

// // //   // Extract data for walls, doors, and windows
// // //   const walls = layout.walls.map((wall, index) => ({
// // //     id: `Wall ${index + 1}`,
// // //     x1: wall.start.x,
// // //     y1: wall.start.y,
// // //     x2: wall.end.x,
// // //     y2: wall.end.y,
// // //   }));

// // //   const doors = layout.doors.map((door, index) => ({
// // //     id: `Door ${index + 1}`,
// // //     x: door.x,
// // //     y: door.y,
// // //   }));

// // //   const windows = layout.windows.map((window, index) => ({
// // //     id: `Window ${index + 1}`,
// // //     x: window.x,
// // //     y: window.y,
// // //   }));

// // //   const furniture = layout.furniture.map((item, index) => ({
// // //     id: `${item.type} ${index + 1}`,
// // //     x: item.location.x,
// // //     y: item.location.y,
// // //   }));

// // //   return (
// // //     <div className="p-6 bg-gray-100 min-h-screen">
// // //       <h2 className="text-3xl font-bold mb-6">Room Layout</h2>
// // //       <div className="mb-6">
// // //         <p>Below is the visual representation of the room layout based on the JSON data:</p>
// // //       </div>

// // //       {/* Chart Section */}
// // //       <ResponsiveContainer width="100%" height={400}>
// // //         <ScatterChart>
// // //           <CartesianGrid strokeDasharray="3 3" />
// // //           <XAxis type="number" dataKey="x" name="X" unit="m" />
// // //           <YAxis type="number" dataKey="y" name="Y" unit="m" />
// // //           <Tooltip cursor={{ strokeDasharray: "3 3" }} />
// // //           <Legend />

// // //           {/* Walls */}
// // //           {walls.map((wall) => (
// // //             <Scatter
// // //               key={wall.id}
// // //               name={wall.id}
// // //               data={[
// // //                 { x: wall.x1, y: wall.y1 },
// // //                 { x: wall.x2, y: wall.y2 },
// // //               ]}
// // //               line
// // //               fill="#8884d8"
// // //             />
// // //           ))}

// // //           {/* Doors */}
// // //           <Scatter name="Doors" data={doors} fill="#FF0000" />

// // //           {/* Windows */}
// // //           <Scatter name="Windows" data={windows} fill="#0000FF" />

// // //           {/* Furniture */}
// // //           <Scatter name="Furniture" data={furniture} fill="#00FF00" />
// // //         </ScatterChart>
// // //       </ResponsiveContainer>

// // //       <Button className="mt-6" onClick={() => window.history.back()}>
// // //         Go Back
// // //       </Button>
// // //     </div>
// // //   );
// // // };

// // // export default LayoutGeneration;
// "use client";

// import React, { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
// import { Button } from "@/components/ui/button";

// const LayoutGeneration = () => {
//   const searchParams = useSearchParams();
//   const [layout, setLayout] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     try {
//       const stateParam = searchParams.get("state");
//       if (stateParam) {
//         const parsedState = JSON.parse(stateParam);
//         setLayout(parsedState); // Set full layout JSON
//       } else {
//         throw new Error("State parameter is missing or invalid.");
//       }
//     } catch (err) {
//       console.error("Error parsing state parameter:", err);
//       setError(err.message);
//     }
//   }, [searchParams]);

//   if (error) {
//     return (
//       <div className="p-6 bg-gray-100 min-h-screen">
//         <h2 className="text-3xl font-bold mb-6 text-red-600">Error</h2>
//         <p>{error}</p>
//         <Button className="mt-6" onClick={() => window.history.back()}>
//           Go Back
//         </Button>
//       </div>
//     );
//   }

//   if (!layout) {
//     return <p className="text-center text-gray-600">Loading layout...</p>;
//   }

//   // Extract data for rendering
//   const walls = [
//     { x1: 0, y1: 0, x2: layout.dimensions.width, y2: 0 },
//     { x1: layout.dimensions.width, y1: 0, x2: layout.dimensions.width, y2: layout.dimensions.height },
//     { x1: layout.dimensions.width, y1: layout.dimensions.height, x2: 0, y2: layout.dimensions.height },
//     { x1: 0, y1: layout.dimensions.height, x2: 0, y2: 0 },
//   ];

//   const doors = layout.doors.map((door, index) => ({
//     id: `Door ${index + 1}`,
//     x: door.x,
//     y: door.y,
//   }));

//   const windows = layout.windows.map((window, index) => ({
//     id: `Window ${index + 1}`,
//     x: window.x,
//     y: window.y,
//   }));

//   const furniture = layout.furniture.map((item, index) => ({
//     id: `${item.type} ${index + 1}`,
//     x: item.location.x,
//     y: item.location.y,
//   }));

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h2 className="text-3xl font-bold mb-6">Room Layout</h2>
//       <div className="mb-6">
//         <p>Below is the visual representation of the room layout based on the provided JSON data:</p>
//       </div>

//       {/* Chart Section */}
//       <ResponsiveContainer width="100%" height={400}>
//         <ScatterChart>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis type="number" dataKey="x" name="X (m)" unit="m" />
//           <YAxis type="number" dataKey="y" name="Y (m)" unit="m" />
//           <Tooltip cursor={{ strokeDasharray: "3 3" }} />
//           <Legend />

//           {/* Walls */}
//           {walls.map((wall, index) => (
//             <Scatter
//               key={`Wall-${index}`}
//               name={`Wall ${index + 1}`}
//               data={[
//                 { x: wall.x1, y: wall.y1 },
//                 { x: wall.x2, y: wall.y2 },
//               ]}
//               line
//               fill="#8884d8"
//             />
//           ))}

//           {/* Doors */}
//           <Scatter name="Doors" data={doors} fill="#FF0000" />

//           {/* Windows */}
//           <Scatter name="Windows" data={windows} fill="#0000FF" />

//           {/* Furniture */}
//           <Scatter name="Furniture" data={furniture} fill="#00FF00" />
//         </ScatterChart>
//       </ResponsiveContainer>

//       <Button className="mt-6" onClick={() => window.history.back()}>
//         Go Back
//       </Button>
//     </div>
//   );
// };

// export default LayoutGeneration;
"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { Button } from "@/components/ui/button";

const LayoutGeneration = () => {
  const searchParams = useSearchParams();
  const [layout, setLayout] = useState(null);

  useEffect(() => {
    try {
      console.log(searchParams);
      const layoutParam = searchParams.get("layout");
      if (layoutParam) {
        const parsedLayout = JSON.parse(decodeURIComponent(layoutParam));
        setLayout(parsedLayout); // Set the layout JSON data
      } else {
        throw new Error("Layout parameter is missing or invalid.");
      }
    } catch (err) {
      console.error("Error parsing layout parameter:", err);
    }
  }, [searchParams]);

  if (!layout) {
    return <p className="text-center text-gray-600">Loading layout...</p>;
  }

  // Extract data for rendering
  const walls = [
    { x1: 0, y1: 0, x2: layout.dimensions.width, y2: 0 },
    { x1: layout.dimensions.width, y1: 0, x2: layout.dimensions.width, y2: layout.dimensions.height },
    { x1: layout.dimensions.width, y1: layout.dimensions.height, x2: 0, y2: layout.dimensions.height },
    { x1: 0, y1: layout.dimensions.height, x2: 0, y2: 0 },
  ];

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

  const furniture = layout.furniture.map((item, index) => ({
    id: `${item.type} ${index + 1}`,
    x: item.location.x,
    y: item.location.y,
  }));

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Room Layout</h2>
      <div className="mb-6">
        <p>Below is the visual representation of the room layout based on the provided JSON data:</p>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" dataKey="x" name="X (m)" unit="m" />
          <YAxis type="number" dataKey="y" name="Y (m)" unit="m" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Legend />

          {/* Walls */}
          {walls.map((wall, index) => (
            <Scatter
              key={`Wall-${index}`}
              name={`Wall ${index + 1}`}
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

      <Button className="mt-6" onClick={() => window.history.back()}>
        Go Back
      </Button>
    </div>
  );
};

export default LayoutGeneration;
