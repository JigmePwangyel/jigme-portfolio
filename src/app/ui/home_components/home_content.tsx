// home_content.tsx
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeContent() {
  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-between gap-4 md:gap-8 lg:gap-12">
      {/* Social Media Icons - Vertical on desktop, Horizontal on mobile */}
      <motion.div
        className="hidden md:flex flex-col items-center justify-center gap-6 order-1"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <a
          href="https://instagram.com/wangyeljigme"
          className="hover:opacity-80 transition-opacity flex items-center justify-center"
        >
          <div className="w-5 h-5 lg:w-5 lg:h-5 relative">
            <Image
              src="/instagram.png"
              alt="Instagram Logo"
              fill
              className="object-contain"
            />
          </div>
        </a>
        <a
          href="https://github.com/JigmePwangyel"
          className="hover:opacity-80 transition-opacity flex items-center justify-center"
        >
          <div className="w-5 h-5 lg:w-5 lg:h-5 relative">
            <Image
              src="/github.png"
              alt="Github Logo"
              fill
              className="object-contain"
            />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/jigme-phuntsho-wangyel-357762239/?originalSubdomain=bt"
          className="hover:opacity-80 transition-opacity flex items-center justify-center"
        >
          <div className="w-5 h-5 lg:w-5 lg:h-5 relative">
            <Image
              src="/linkedin.png"
              alt="Linkedin Logo"
              fill
              className="object-contain"
            />
          </div>
        </a>
      </motion.div>

      {/* Main Content - Text */}
      <motion.div
        className="w-full md:w-auto order-2 md:order-2 text-center md:text-left"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1 md:mb-4">
          Hello, I&apos;m Jigme,
        </p>
        <motion.h1
          className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Full Stack Developer
        </motion.h1>
        <p className="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl mt-1 md:mt-4">
          based in Bhutan
        </p>

        {/* Scroll indicator - Only on larger screens */}
        <div className="hidden md:block mt-8 lg:mt-16 xl:mt-20">
          <div className="flex items-center gap-x-3">
            <Image
              src="/mouse.svg"
              alt="Mouse Logo"
              width={20}
              height={20}
              className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
            />
            <p className="font-semibold text-sm lg:text-base">Scroll down</p>
            <Image
              src="/arrow.png"
              alt="Arrow Logo"
              width={10}
              height={10}
              className="w-2 h-2 lg:w-3 lg:h-3"
            />
          </div>
        </div>

        {/* Social Media Icons - Horizontal on mobile only */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-4 order-4">
          <a
            href="https://instagram.com/wangyeljigme"
            className="hover:opacity-80 transition-opacity flex items-center justify-center"
          >
            <div className="w-4 h-4 sm:w-5 sm:h-5 relative">
              <Image
                src="/instagram.png"
                alt="Instagram Logo"
                fill
                className="object-contain"
              />
            </div>
          </a>
          <a
            href="https://github.com/JigmePwangyel"
            className="hover:opacity-80 transition-opacity flex items-center justify-center"
          >
            <div className="w-4 h-4 sm:w-5 sm:h-5 relative">
              <Image
                src="/github.png"
                alt="Github Logo"
                fill
                className="object-contain"
              />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/jigme-phuntsho-wangyel-357762239/?originalSubdomain=bt"
            className="hover:opacity-80 transition-opacity flex items-center justify-center"
          >
            <div className="w-4 h-4 sm:w-5 sm:h-5 relative">
              <Image
                src="/linkedin.png"
                alt="Linkedin Logo"
                fill
                className="object-contain"
              />
            </div>
          </a>
        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        className="order-1 md:order-3"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src="/Headshot.png"
          alt="Jigme Wangyel - Full Stack Developer"
          width={600}
          height={600}
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px] object-contain"
          priority
        />
      </motion.div>
    </div>
  );
}
