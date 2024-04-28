"use client"
import React from 'react'
import { HeroParallax } from "./ui/hero-parallax";

function HeroSection() {
  return (
    
        <HeroParallax products={products} />
    
  )
}

export const products = [
    {
      title: "Jayesh",
      thumbnail:
        "/Images/image1.jpg",
    },
    {
      title: "Jayesh",
      thumbnail:
        "/Images/image2.jpg",
    },
    {
      title: "Jayesh",
      thumbnail:
        "/Images/image3.jpg",
    },
    {
      title: "Jayesh",
      thumbnail:
        "/Images/image5.jpg",
    },
    
  ];

export default HeroSection