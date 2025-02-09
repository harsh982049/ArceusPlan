"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EnterDimensions = () => {
  const router = useRouter();
  const [dimensions, setDimensions] = useState({
    length: "",
    width: "",
    height: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDimensions((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5001/dimensions", dimensions, {
        headers: { "Content-Type": "application/json" },
      });

      router.push("/dashboard/room-scanning/layout-generation", { state: { layout: response.data } });
    } catch (error) {
      alert("Error submitting dimensions.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Enter Room Dimensions</h2>
      <form className="space-y-4">
        <Input
          type="number"
          name="length"
          placeholder="Length (meters)"
          value={dimensions.length}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="width"
          placeholder="Width (meters)"
          value={dimensions.width}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="height"
          placeholder="Height (meters)"
          value={dimensions.height}
          onChange={handleChange}
        />
        <Button className="w-full mt-4" onClick={handleSubmit}>
          Submit Dimensions
        </Button>
      </form>
    </div>
  );
};

export default EnterDimensions;
