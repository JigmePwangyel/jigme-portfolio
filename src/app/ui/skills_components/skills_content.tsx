// skills_content.tsx
import Image from "next/image";
import { motion } from "framer-motion";

export default function SkillsContent() {
  return (
    <div className="flex flex-col h-full w-full items-center px-4 sm:px-6 md:px-12">
      {/* Section Title */}
      <motion.h2
        className="text-center font-extrabold text-2xl sm:text-3xl md:text-4xl py-5"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      {/* Description Text */}
      <motion.p
        className="text-center mb-12 text-sm sm:text-base max-w-2xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Skills & Technologies - The Tools of My Trade and Debugging Nightmares
      </motion.p>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-12 sm:gap-x-16 md:gap-x-20 gap-y-16 sm:gap-y-20 md:gap-y-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {[
          { src: "/skills/react.png", label: "React" },
          { src: "/skills/tailwindcss.png", label: "Tailwind CSS" },
          { src: "/skills/nextjs.png", label: "Next JS" },
          { src: "/skills/flutter.png", label: "Flutter" },
          // { src: "/skills/rails.png", label: "Ruby on Rails" },
          { src: "/skills/express.png", label: "Express JS" },
          { src: "/skills/postgres.png", label: "Postgres" },
          { src: "/skills/mongodb.png", label: "Mongo DB" },
          { src: "/skills/odoo.png", label: "Odoo" },
          { src: "/skills/figma.png", label: "Figma" },
          { src: "/skills/git.png", label: "Git" },
        ].map((skill, index) => (
          <motion.div
            key={skill.label}
            className="flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src={skill.src}
              alt={`${skill.label} Image`}
              width={80}
              height={80}
            />
            <span className="mt-2 text-sm">{skill.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
