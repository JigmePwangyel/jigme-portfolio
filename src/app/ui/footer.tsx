"use client";

import Image from "next/image";
import { scrollToSection } from "@/app/utils/scroll";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <section className="h-full sm:mb-6 lg:mb-12">
      <motion.div
        className="flex flex-col items-center justify-center w-full px-6 py-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-2xl font-extrabold mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Jigme
        </motion.h2>

        <motion.p
          className="mb-6 text-center text-sm sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Code in progress, always evolving.
        </motion.p>

        <motion.ul
          className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-sm sm:text-base mb-6 w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {["home", "about", "skills", "portfolio", "contact"].map(
            (section) => (
              <motion.li
                key={section}
                onClick={() => scrollToSection(section)}
                className="relative group cursor-pointer capitalize"
                whileHover={{ scale: 1.05 }}
              >
                {section}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
              </motion.li>
            )
          )}
        </motion.ul>

        <motion.div
          className="flex items-center justify-center text-center gap-2 text-xs sm:text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Image src="/copyright.png" alt="Copyright" width={15} height={15} />
          <p className="font-medium">
            2025 Jigme Phuntsho Wangyel. All Rights Reserved.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
