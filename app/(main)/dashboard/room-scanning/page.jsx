"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RoomScanning = () => {
  const router = useRouter();

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Room Scanning</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Capture Room Image</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Capture images of your room for scanning and analysis.</p>
            <Button onClick={() => router.push("/dashboard/room-scanning/image-capture")}>
              Capture Image
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Generate 2D Layout</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Visualize the room's 2D layout based on captured images and Gemini API.
            </p>
            <Button onClick={() => router.push("/dashboard/room-scanning/layout-generation")}>
              View Layout
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RoomScanning;
