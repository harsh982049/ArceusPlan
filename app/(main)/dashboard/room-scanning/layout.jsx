"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Shadcn Tabs

const RoomScanningLayout = ({ children }) => {
  const router = useRouter();

  return (
    <div className="pt-20"> {/* Ensure space below the main navbar */}
      {/* Sub-navbar for room scanning */}
      <Tabs defaultValue="capture-images" className="mb-6">
        <TabsList className="justify-center">
          <TabsTrigger
            value="capture-images"
            onClick={() => router.push("/dashboard/room-scanning/image-capture")}
          >
            Capture Images
          </TabsTrigger>
          <TabsTrigger
            value="upload-images"
            onClick={() => router.push("/dashboard/room-scanning/upload-images")}
          >
            Upload Images
          </TabsTrigger>
          <TabsTrigger
            value="enter-dimensions"
            onClick={() => router.push("/dashboard/room-scanning/enter-dimensions")}
          >
            Enter Dimensions
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Render the child content for each route */}
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default RoomScanningLayout;
