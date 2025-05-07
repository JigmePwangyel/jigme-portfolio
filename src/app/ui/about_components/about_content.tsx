// about_component.tsx
"use client";

import React from "react";
import Image from "next/image";
import Button from "@/app/ui/button";
import { motion } from "framer-motion";

export default function AboutComponent() {
  const handleClick = () => {
    const cv = "Jigme_Phuntsho_Wangyel_CV.pdf";
    const link = document.createElement("a");
    link.href = cv;
    link.download = "Jigme Phuntsho Wangyel CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col w-full items-center px-4 sm:px-6 md:px-6 lg:px-6">
      <motion.h2
        className="font-extrabold text-2xl sm:text-3xl md:text-4xl py-6 sm:py-8 md:py-10 lg:py-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row w-full gap-6 md:gap-8 lg:gap-12 items-center">
        {/* Image section - Responsive with proper sizing */}
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center md:justify-end"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <Image
              src="/about.png"
              alt="About Jigme Phuntsho Wangyel"
              width={350}
              height={350}
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Text content section - Text sizes scale with screen size */}
        <motion.div
          className="flex flex-col w-full md:w-1/2 mt-4 md:mt-0"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed">
            Hey there! I&apos;m a soon-to-be IT engineering graduate from
            Bhutan, navigating my way through the world of full-stack
            development. Coding is my thing—I love the thrill of solving
            problems, breaking things &lsquo;on purpose&rsquo;, and then fixing
            them again &lsquo;hopefully&rsquo;.
          </p>

          <p className="mt-4 sm:mt-5 md:mt-6 lg:mt-7 text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed">
            When I&apos;m not busy building software, you can probably find me
            shooting hoops, binge-watching anime, or diving into a good book
            &lsquo;or at least trying to build that habit&rsquo;. My goal? To
            become a software engineer and craft solutions that make a real
            impact. Until then, I&apos;ll be here, coding away and occasionally
            questioning my life choices when a bug refuses to go away.
          </p>

          <div className="mt-6 sm:mt-7 md:mt-8 lg:mt-10">
            <Button
              type="button"
              title="Download CV"
              icon="/file.svg"
              onClick={handleClick}
              disable={false}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
