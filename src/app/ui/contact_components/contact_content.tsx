import EmailForm from "@/app/ui/contact_components/email_form";
import { motion } from "framer-motion"; // Import motion

export default function ContactsContent() {
  return (
    <motion.div
      className="flex flex-col h-full w-full items-center px-4 sm:px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="px-20 py-5 font-extrabold text-3xl mb-5 lg:mb-20 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact
      </motion.h2>

      <div className="flex flex-col lg:flex-row w-full gap-y-8 lg:gap-y-0 lg:gap-x-12">
        <div className="w-full lg:w-1/2">
          <motion.h2
            className="font-extrabold text-xl mb-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Let&apos;s work together
          </motion.h2>
          <p className="text-xs sm:text-sm md:text-sm lg:text-base">
            Got an idea or need a developer? I&apos;m always up for exciting
            projects, collaborations, and problem-solving. Let&apos;s connect
            and build something awesome!
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <EmailForm />
        </div>
      </div>
    </motion.div>
  );
}
