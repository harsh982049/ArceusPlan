import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Dashboard Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to your design workspace.</p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Room Scanning */}
        <Card>
          <CardHeader>
            <CardTitle>Room Scanning</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Scan your room and automatically generate accurate floor plans.
            </p>
            <Button className="mt-4" variant="primary">
              Start Scanning
            </Button>
          </CardContent>
        </Card>

        {/* Furniture Arrangement */}
        <Card>
          <CardHeader>
            <CardTitle>Furniture Arrangement</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Experiment with furniture arrangements in augmented reality.
            </p>
            <Button className="mt-4" variant="primary">
              Open AR Mode
            </Button>
          </CardContent>
        </Card>

        {/* Wall Simulation */}
        <Card>
          <CardHeader>
            <CardTitle>Wall Color Simulation</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Simulate wall colors and finishes with real-time lighting.
            </p>
            <Button className="mt-4" variant="primary">
              Try Simulations
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Space Optimization Insights</h2>
        <Card>
          <CardContent>
            <p className="text-gray-600">
              Analyze your room layout for space efficiency and get actionable
              recommendations for improvement.
            </p>
            <Button className="mt-4" variant="primary">
              View Insights
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


// "use client"; // This makes the component a Client Component

// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Home() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//         try {
//             const response = await axios.get("http://127.0.0.1:5000/hotels");
//             console.log(response.data.hotels);
//             setData(response.data.hotels);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//         };

//         fetchData(); // Call the async function inside useEffect
//     }, []);

//     return (
//         <div>
//             <h1>Next.js 15 + Flask</h1>
//             {/* <div>Message from backend: {data.map((hotel) => {
//                 return <div key={hotel.hid}>
//                     <p>{hotel.city}</p>
//                     <p>{hotel.location}</p>
//                 </div>
//             })}
//             </div> */}
//         </div>
//     );
// }
