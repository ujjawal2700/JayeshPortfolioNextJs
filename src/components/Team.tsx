"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";



const people = [
  {
    id: 1,
    name: "Rajasmita Datta",
    designation: "Digital Marketing",
    image:
      "/Avatars/girl-1.png",
  },
  {
    id: 2,
    name: "Asma",
    designation: "Digital Marketing",
    image:
      "/Avatars/girl-2.png",
  },
  {
    id: 3,
    name: "Abhishek Shakya",
    designation: "50000+",
    image:
      "/Avatars/boy-1.jpg",
  },
  {
    id: 4,
    name: "Tanuj",
    designation: "45000+",
    image:
      "/Avatars/girl-2.png",
  },
  {
    id: 5,
    name: "Shahnawaz Ansari",
    designation: "100000+",
    image:
      "/Avatars/boy-1.jpg",
  },
  {
    id: 6,
    name: "Gurpreet",
    designation: "500000+",
    image:
      "/Avatars/boy-2.png",
  },
  {
    id: 7,
    name: "Rupa",
    designation: "Digital Marketing",
    image:
      "/Avatars/girl-2.png",
  },
];

function Team() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center" id="Team">
      <WavyBackground className="w-full relative">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Meet my Team Members
      </p>
      <p className="text-base md:text-lg mt-4 mx-10 md:mx-15 lg:mx-20 text-white font-normal inter-var text-center">
      I help more than 500 middle class people to achiever their first income through Leads Guru and i am grateful to all of those people who help me to reach at the place where i can be financially independent and support my family
      </p>
      <div className="flex flex-row items-center justify-center my-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
    </WavyBackground>
    </div>
      
  )
}

export default Team