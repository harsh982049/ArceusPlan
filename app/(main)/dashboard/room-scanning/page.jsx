// "use client";

// import React from "react";
// import { useRouter } from "next/navigation";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// const RoomScanning = () => {
//   const router = useRouter();

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h2 className="text-3xl font-bold mb-6">Room Scanning</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <Card>
//           <CardHeader>
//             <CardTitle>Capture Room Image</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p>Capture images of your room for scanning and analysis.</p>
//             <Button onClick={() => router.push("/dashboard/room-scanning/image-capture")}>
//               Capture Image
//             </Button>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader>
//             <CardTitle>Generate 2D Layout</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p>
//               Visualize the room's 2D layout based on captured images and Gemini API.
//             </p>
//             <Button onClick={() => router.push("/dashboard/room-scanning/layout-generation")}>
//               View Layout
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default RoomScanning;
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RoomScanning = () => {
  const router = useRouter();

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Room Scanning</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Capture Room Image */}
        <Card className="flex flex-col items-center justify-between p-4">
          <CardHeader>
            <CardTitle>Capture Room Image</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p>Capture images of your room for scanning and analysis.</p>
            <Button
              className="mt-4"
              onClick={() => router.push("/dashboard/room-scanning/image-capture")}
            >
              Capture Image
            </Button>
          </CardContent>
        </Card>

        {/* Generate 2D Layout */}
        <Card className="flex flex-col items-center justify-between p-4">
          <CardHeader>
            <CardTitle>Generate 2D Layout</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p>Visualize the room's 2D layout based on captured images and Gemini API.</p>
            <Button
              className="mt-4"
              onClick={() => router.push("/dashboard/room-scanning/layout-generation")}
            >
              View Layout
            </Button>
          </CardContent>
        </Card>

        {/* Upload Room Images */}
        <Card className="flex flex-col items-center justify-between p-4">
          <CardHeader>
            <CardTitle>Upload Room Images</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p>Upload images of your room for detailed analysis.</p>
            <Button
              className="mt-4"
              onClick={() => router.push("/dashboard/room-scanning/upload-images")}
            >
              Upload Images
            </Button>
          </CardContent>
        </Card>

        {/* Manual Dimensions Input */}
        <Card className="flex flex-col items-center justify-between p-4">
          <CardHeader>
            <CardTitle>Manual Dimensions Input</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p>Manually input room dimensions to generate a 2D layout.</p>
            <Button
              className="mt-4"
              onClick={() => router.push("/dashboard/room-scanning/manual-dimensions")}
            >
              Enter Dimensions
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RoomScanning;
