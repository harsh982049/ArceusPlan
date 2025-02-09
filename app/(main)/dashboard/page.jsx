
// "use client";

// import React from "react";
// import { useRouter } from "next/navigation";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// export default function Dashboard() {
//   const router = useRouter();

//   const handleStartScanning = () => {
//     router.push("/dashboard/room-scanning"); // Navigate to room scanning page
//   };

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       {/* Dashboard Header */}
//       <div className="mb-8 text-center">
//         <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
//         <p className="text-gray-600 mt-2">Welcome to your design workspace.</p>
//       </div>

//       {/* Cards Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Room Scanning */}
//         <Card className="flex flex-col justify-between p-4">
//           <CardHeader>
//             <CardTitle className="text-center">Room Scanning</CardTitle>
//           </CardHeader>
//           <CardContent className="flex-grow text-center">
//             <p>Scan your room and automatically generate accurate floor plans.</p>
//           </CardContent>
//           <Button
//             className="mt-4 bg-black text-white hover:bg-gray-800"
//             onClick={handleStartScanning}
//           >
//             Start Scanning
//           </Button>
//         </Card>

//         {/* Furniture Arrangement */}
//         <Card className="flex flex-col justify-between p-4">
//           <CardHeader>
//             <CardTitle className="text-center">Furniture Arrangement</CardTitle>
//           </CardHeader>
//           <CardContent className="flex-grow text-center">
//             <p>Experiment with furniture arrangements in augmented reality.</p>
//           </CardContent>
//           <Button className="mt-4 bg-black text-white hover:bg-gray-800">
//             Open AR Mode
//           </Button>
//         </Card>

//         {/* Wall Simulation */}
//         <Card className="flex flex-col justify-between p-4">
//           <CardHeader>
//             <CardTitle className="text-center">Wall Color Simulation</CardTitle>
//           </CardHeader>
//           <CardContent className="flex-grow text-center">
//             <p>Simulate wall colors and finishes with real-time lighting.</p>
//           </CardContent>
//           <Button className="mt-4 bg-black text-white hover:bg-gray-800">
//             Try Simulations
//           </Button>
//         </Card>

//         {/* Space Optimization Insights */}
//         <Card className="flex flex-col justify-between p-4">
//           <CardHeader>
//             <CardTitle className="text-center">Space Optimization Insights</CardTitle>
//           </CardHeader>
//           <CardContent className="flex-grow text-center">
//             <p>
//               Analyze your room layout for space efficiency and get actionable recommendations for improvement.
//             </p>
//           </CardContent>
//           <Button className="mt-4 bg-black text-white hover:bg-gray-800">
//             View Insights
//           </Button>
//         </Card>
//       </div>
//     </div>
//   );
// }
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const router = useRouter();

  const handleStartScanning = () => {
    router.push("/dashboard/room-scanning"); // Navigate to room scanning page
  };

  const handleOpenARMode = () => {
    // Open the AR model link in a new tab
    window.open(
      "https://manager.augment.com/en/model3ds/c13b450a-de6f-4688-90e0-a7d8e38c13dd",
      "_blank"
    );
  };
  const space=() => {
    router.push('/dashboard/space-optimize')
  }
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Dashboard Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to your design workspace.</p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Room Scanning */}
        <Card className="flex flex-col justify-between p-4">
          <CardHeader>
            <CardTitle className="text-center">Room Scanning</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow text-center">
            <p>Scan your room and automatically generate accurate floor plans.</p>
          </CardContent>
          <Button
            className="mt-4 bg-black text-white hover:bg-gray-800"
            onClick={handleStartScanning}
          >
            Start Scanning
          </Button>
        </Card>

        {/* Furniture Arrangement */}
        <Card className="flex flex-col justify-between p-4">
          <CardHeader>
            <CardTitle className="text-center">Furniture Arrangement</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow text-center">
            <p>Experiment with furniture arrangements in augmented reality.</p>
          </CardContent>
          <Button
            className="mt-4 bg-black text-white hover:bg-gray-800"
            onClick={handleOpenARMode} // Open AR Mode
          >
            Open AR Mode
          </Button>
        </Card>

        {/* Wall Simulation */}
        <Card className="flex flex-col justify-between p-4">
          <CardHeader>
            <CardTitle className="text-center">Wall Color Simulation</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow text-center">
            <p>Simulate wall colors and finishes with real-time lighting.</p>
          </CardContent>
          <Button className="mt-4 bg-black text-white hover:bg-gray-800">
            Try Simulations
          </Button>
        </Card>

        {/* Space Optimization Insights */}
        <Card className="flex flex-col justify-between p-4">
          <CardHeader>
            <CardTitle className="text-center">Space Optimization Insights</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow text-center">
            <p>
              Analyze your room layout for space efficiency and get actionable recommendations for improvement.
            </p>
          </CardContent>
          <Button onClick={space} className="mt-4 bg-black text-white hover:bg-gray-800">
            View Insights
          </Button>
        </Card>
      </div>
    </div>
  );
}
