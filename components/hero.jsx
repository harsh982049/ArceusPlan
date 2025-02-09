"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import image from "../public/AR.jpg";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[90px] pb-6 gradient-title">
          Redefine Your Space <br /> with Smart Design
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform any room into an interactive digital workspace. Scan spaces,
          generate accurate floor plans, visualize designs in AR, and optimize
          functionality with AI-driven insights.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8 bg-black text-white hover:bg-gray-800">
              Get Started
            </Button>
          </Link>
          {/* <Link href="https://www.youtube.com/roadsidecoder">
            <Button size="lg" variant="outline" className="px-8 border-black text-black hover:bg-gray-100">
              Watch Demo
            </Button>
          </Link> */}
        </div>
        <div className="hero-image-wrapper mt-8">
          <div ref={imageRef} className="hero-image">
            <Image
              src={image} // Replace with a relevant banner image
              width={1000}
              height={720}
              alt="Room Planner Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
