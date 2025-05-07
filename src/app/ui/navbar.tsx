"use client";
import clsx from "clsx";

import Link from "next/link";
import { scrollToSection } from "@/app/utils/scroll";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="pt-8 pb-8 xl:mx-22 mx-6">
      {/**Desktop Menu */}
      <div className="hidden md:flex md:flex-wrap  md:items-center md:justify-between md:w-full ">
        <Link href="/">
          <span className="font-extrabold text-2xl">Jigme</span>
        </Link>
        <div className="w-96">
          <ul className="flex items-center justify-between">
            <li
              onClick={() => scrollToSection("home")}
              className="text-gray font-medium relative group cursor-pointer"
            >
              Home
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
            </li>
            <li
              onClick={() => scrollToSection("about")}
              className="text-gray font-medium relative group cursor-pointer"
            >
              About
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
            </li>
            <li
              onClick={() => scrollToSection("skills")}
              className="text-gray font-medium relative group cursor-pointer"
            >
              Skills
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
            </li>
            <li
              onClick={() => scrollToSection("portfolio")}
              className="text-gray font-medium relative group cursor-pointer"
            >
              Portfolio
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
            </li>
            <li
              onClick={() => scrollToSection("contact")}
              className="text-gray font-medium relative group cursor-pointer"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
            </li>
          </ul>
        </div>
      </div>

      {/**Hamburger Menu*/}
      <div
        className="md:hidden flex flex-wrap justify-between items-center w-full"
        onClick={toggleMenu}
      >
        <Link href="/">
          <span className="font-extrabold text-lg">Jigme</span>
        </Link>
        <Image src={"/hamburger.png"} alt="Menu Icon" width={15} height={10} />
      </div>

      {/**Side Drop Down */}
      <div
        className={clsx(
          "fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          {
            "translate-x-0": isOpen,
            "translate-x-full": !isOpen,
          }
        )}
      >
        <div className="flex justify-end p-4">
          <Image
            src={"/close-icon.png"}
            alt="Close Icon"
            onClick={toggleMenu}
            width={15}
            height={15}
          />
        </div>

        <ul className="p-6 space-y-4">
          <li
            onClick={() => {
              scrollToSection("home");
              setIsOpen(false);
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              scrollToSection("about");
              setIsOpen(false);
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              scrollToSection("skills");
              setIsOpen(false);
            }}
          >
            Skills
          </li>
          <li
            onClick={() => {
              scrollToSection("portfolio");
              setIsOpen(false);
            }}
          >
            Portfolio
          </li>
          <li
            onClick={() => {
              scrollToSection("contact");
              setIsOpen(false);
            }}
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}
