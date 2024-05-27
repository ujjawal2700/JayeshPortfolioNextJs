"use client";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import React from "react";

function Achievments() {
  return (
    <TracingBeam className="px-6">
        <h1 className="text-4xl lg:text-7xl mb-8 text-center font-bold" id="Achievments">Achievments</h1>
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h1 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.title}
            </h1>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="500"
                  width="350"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "My first bike",
    description: (
      <>
        <p>
        i came from a lower middle class family where if we want to purchase anything we have to struggle a lot. but with LeadsGuru i became financially independent.
        </p>
        <p>and then i brought my first bike. worth rs. 2.1 Lac</p>
      </>
    ),
    image: "/Images/achievment1.svg",
  },
  {
    title: "My Earning",
    description: (
      <>
        <p>
        There was a time when i work on a showroom only for 7000 per month and did not satisfy with the work i do but i have no other option, the my friend told me to join in LeadsGuru
        </p>
        <p>and i earn more than 11 Lac in 1 year</p>
      </>
    ),
    image: "/Images/achievment2.PNG",
  },
  {
    title: "My Iphone",
    description: (
      <>
        <p>
        There was a time when i use keypad phone then i brought a tecno smartphone and after that i join Leadsguru and brought my first expensive phone of One Plus worth 40000 rs.
        </p>
        <p>and then i brought my first apple device iPhone 14 pro worth 1.4 Lac</p>
      </>
    ),
    image: "/Images/achievment3.svg",
  },
];

export default Achievments;
