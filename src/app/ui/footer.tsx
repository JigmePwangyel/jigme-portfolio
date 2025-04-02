"use client";

import Image from "next/image";
import { scrollToSection } from "@/app/utils/scroll";

export default function Footer() {
  return (
    <section className="h-full mb-28">
      <div className="flex flex-1 flex-col items-center justify-center w-full p-10">
        <h2 className="px-20 py-5 font-extrabold text-2xl">Jigme</h2>
        <p>Code in progress, always evolving.</p>
        <div className="w-1/2 p-5">
          <ul className="flex justify-around">
            <li
              onClick={() => scrollToSection("home")}
              className="relative group cursor-pointer"
            >
              Home
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
            </li>

            <li
              onClick={() => scrollToSection("about")}
              className="relative group cursor-pointer"
            >
              About
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
            </li>
            <li
              onClick={() => scrollToSection("skills")}
              className="relative group cursor-pointer"
            >
              Skills
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
            </li>
            <li
              onClick={() => scrollToSection("portfolio")}
              className="relative group cursor-pointer"
            >
              Portfolio
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
            </li>
            <li
              onClick={() => scrollToSection("contact")}
              className="relative group cursor-pointer"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
            </li>
          </ul>
        </div>
        <div className="flex w-1/2 items-center justify-center">
          <Image
            src="/copyright.png"
            alt="About Image"
            width={15}
            height={15}
            className="mr-2"
          />
          <p className="font-medium">
            2025 Jigme Phuntsho Wangyel. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
