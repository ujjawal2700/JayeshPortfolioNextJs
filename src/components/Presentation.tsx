"use client";
import Link from "next/link";
import React from "react";

//https://youtu.be/XWID-7Pqhvw?si=9-wCtKrqNfuwK-U-
function Presentation() {
  return (
    <div className="relative h-screen w-full flex flex-col dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] items-center justify-center" id="Presentation">
      <h1 className="text-4xl md:text-8xl font-bold mb-8">Presentation</h1>
      <iframe
        width="560"
        height="315"
        className="w-full md:w-auto aspect-video "
        src="https://www.youtube.com/embed/XWID-7Pqhvw?si=8oOKGj5qzOHW7a_m"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
      <Link href={"https://leadsguru.in/register.aspx?refid=b2d68f20-aad3-4705-8686-b713da159fa4"} target="_blank">
        <button className="p-[3px] relative mt-10">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Join Now
          </div>
        </button>
      </Link>
    </div>
  );
}

export default Presentation;
