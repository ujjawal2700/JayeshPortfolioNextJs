"use client"
import React from 'react'
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import Link from 'next/link';
 

function Leadsguru() {
  return (
    <div className="flex flex-col overflow-hidden" id='Leadsguru'>
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Join the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                LEADSGURU
              </span>
            </h1>
          </>
        }
      >
        <Link href={"https://leadsguru.in"} target='_blank'>
        <Image
          src={"/Images/leadsguru.png"}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
        </Link>
      </ContainerScroll>
    </div>
  )
}

export default Leadsguru