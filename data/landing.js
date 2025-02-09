import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
} from "lucide-react";

// Stats Data
export const statsData = [
  {
    value: "10K+",
    label: "Spaces Scanned",
  },
  {
    value: "5K+",
    label: "Furniture Arranged",
  },
  {
    value: "95%",
    label: "User Satisfaction",
  },
  {
    value: "4.8/5",
    label: "Average Rating",
  },
];

// Features Data
export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Room Scanning & Auto Floorplan Generation",
    description:
      "Leverage AI-based layout extraction to convert real-world spaces into digital floor plans with accurate dimensions, wall placements, and editable layouts.",
  },
  {
    icon: <Receipt className="h-8 w-8 text-blue-600" />,
    title: "AR-Based Furniture Placement",
    description:
      "Visualize and interact with furniture arrangements in real-time using augmented reality. Resize, rotate, and place furniture seamlessly.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "Real-Time Wall Color & Lighting Simulation",
    description:
      "Simulate various wall colors, finishes, and lighting conditions to enhance the room's ambiance and aesthetic appeal.",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "Live Multi-User Collaboration",
    description:
      "Edit and design in real-time with architects, designers, and homeowners using co-editing and feedback tools.",
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Space Optimization Insights",
    description:
      "Receive actionable insights to maximize functionality and comfort, including metrics for furniture fit, circulation space, and ergonomic balance.",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Seamless Export & Sharing",
    description:
      "Save, share, and export floor plans for review and feedback, with support for design tools and cloud storage.",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "1. Scan Your Space",
    description:
      "Quickly scan your room to generate an accurate digital floor plan using advanced AI and camera inputs.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "2. Customize & Visualize",
    description:
      "Add furniture, simulate wall finishes, and customize the layout to suit your preferences in real-time.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "3. Collaborate & Optimize",
    description:
      "Collaborate with others, receive actionable insights, and refine the space for maximum efficiency and aesthetics.",
  },
];

// Testimonials Data
export const testimonialsData = [
  {
    name: "Jane Doe",
    role: "Architect",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    quote:
      "This tool has completely revolutionized how we plan spaces for clients. The accuracy and efficiency are unmatched.",
  },
  {
    name: "John Smith",
    role: "Interior Designer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "The AR-based furniture placement is a game-changer. It allows us to visualize layouts in ways that were never possible before.",
  },
  {
    name: "Emily Davis",
    role: "Homeowner",
    image: "https://randomuser.me/api/portraits/women/74.jpg",
    quote:
      "I used this app to redesign my living room. The insights and simulations made the entire process seamless and fun.",
  },
];
