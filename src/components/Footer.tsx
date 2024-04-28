import Image from "next/image";
import Link from "next/link";
import React from "react";

var year = new Date().getFullYear();
var text = "Hi, I just visited your website and i want to know about your business."

const social = [
  {
    id: 1,
    username: "jayeshasthana_",
    image: "/Images/instagram.png",
    alt: "Instagram logo",
    link: "https://www.instagram.com/jayeshasthana_/",
  },
  {
    id: 2,
    username: "6375557682",
    image: "/Images/whatsapp.png",
    alt: "Whatsapp Logo",
    link: `https://wa.me/6375557682?text=${text}`,
  },
  {
    id: 3,
    username: "Jayesh Asthana",
    image: "/Images/linkedin.png",
    alt: "LinkedIn Logo",
    link: "https://www.linkedin.com/in/jayesh-asthana-045862231/",
  },
];

function Footer() {
  return (
    <footer className="relative flex flex-col w-full items-center justify-center">
      <div className="flex items-center flex-col md:flex-row justify-around w-full my-6 gap-10">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold">Jayesh Asthana</h1>
        </div>
        <div className="flex flex-col items-start justify-center gap-3">
          <Link href={"/"}>Home</Link>
          <Link href={"#Leadsguru"}>LeadsGuru</Link>
          <Link href={"#Achievments"}>Achievment</Link>
          <Link href={"#Presentation"}>Presentation</Link>
          <Link href={"#Team"}>Team</Link>
        </div>
        <div className="flex flex-col items-start justify-center gap-3 w-auto">
          {social.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className="flex items-center justify-center gap-3"
              target="_blank"
            >
              <Image src={item.image} alt={item.alt} width={50} height={50} />
              <p>{item.username}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full items-center justify-center">
        <p className="text-center">© {year} Jayesh Asthana. All Rights Reserved</p>
        <p className="text-center">
          Design and Developed by
          <Link className="text-sky-400"
            href={"https://www.instagram.com/ujjawal_here/"}
            target="_blank"
          >
            {" "}
            Ujjawal
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
