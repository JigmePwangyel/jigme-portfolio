"use client";

import React from "react";
import Image from "next/image";
import Button from "@/app/ui/button";

export default function AboutComponent() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="flex flex-col h-full w-full items-center">
      <h2 className="p-20 font-extrabold text-3xl">About Me</h2>
      <div className="flex w-full">
        <div className="w-1/2 flex items-center justify-center">
          <Image src="/about.png" alt="About Image" width={350} height={350} />
        </div>
        <div className="flex flex-col w-1/2 ">
          <p className="w-fit">
            Hey there! I'm a soon-to-be IT engineering graduate from Bhutan,
            navigating my way through the world of full-stack development.
            Coding is my thing—I love the thrill of solving problems, breaking
            things (on purpose), and then fixing them again (hopefully).
          </p>
          <p className="w-fit mt-7">
            When I'm not busy building software, you can probably find me
            shooting hoops, binge-watching anime, or diving into a good book (or
            at least trying to build that habit). My goal? To become a software
            engineer and craft solutions that make a real impact. Until then,
            I'll be here, coding away and occasionally questioning my life
            choices when a bug refuses to go away.
          </p>
          <div className="mt-7">
            <Button
              title="Download CV"
              icon="/file.svg"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
