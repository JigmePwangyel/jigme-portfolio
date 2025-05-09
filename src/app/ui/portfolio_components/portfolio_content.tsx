"use client";

import React from "react";
import Image from "next/image";
import Tag from "@/app/ui/portfolio_components/tag_component";
import { motion } from "framer-motion"; // Ensure this line is present!

export default function PortfolioComponent() {
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
        Portfolio
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-center mb-12 text-sm sm:text-base"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Things I&apos;ve Built
      </motion.p>

      {/* Portfolio Cards */}
      <div className="flex flex-col gap-y-12 w-full">
        {/* Card 1 */}
        <motion.div
          className="rounded-lg shadow bg-white flex flex-col lg:flex-row overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div
            className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-gray-50"
            id="card_color"
          >
            <Image
              src="/Portfolio/rub_acm_mis/rub_acm_mockup.png"
              alt="RUB_ACM_DASHBOARD"
              width={400}
              height={400}
              className="max-w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 p-6">
            <h4 className="font-bold text-xl mb-4">RUB ACM MIS</h4>
            <p className="mb-4 text-xs sm:text-sm md:text-sm lg:text-sm">
              RUB-ACM-MIS is a web-based platform built to streamline the
              management of the ACM Student Chapter at the College of Science
              and Technology. This project was developed as a team project to
              support activities like member registration, event management, and
              report generation
            </p>
            <div className="flex flex-wrap gap-2">
              <Tag text="Odoo" />
              <Tag text="ReactJS" />
              <Tag text="MongoDB" />
              <Tag text="Javascript" />
            </div>
            <a
              href="https://github.com/JigmePwangyel/RUB-ACM-MIS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/link.png"
                alt="Link Logo"
                width={20}
                height={20}
                className="py-6"
              />
            </a>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="rounded-lg shadow bg-white flex flex-col lg:flex-row-reverse overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div
            className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-gray-50"
            id="card_color"
          >
            <Image
              src="/Portfolio/cst_ims/cst_ims_mock.png"
              alt="CST IMS"
              width={400}
              height={400}
              className="max-w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 p-6">
            <h4 className="font-bold text-xl mb-4">CST-IMS</h4>
            <p className="mb-4 text-xs sm:text-sm md:text-sm lg:text-sm">
              CST IMS is a centralized system built using Odoo&apos;s Employee
              and Time Off modules, with custom modules for Student Information,
              Student Leave, Academic Management, and Result Processing to
              streamline administrative and academic operations at the College
              of Science and Technology.
            </p>
            <div className="flex flex-wrap gap-2">
              <Tag text="Odoo" />
              <Tag text="Postgres" />
              <Tag text="Python" />
              <Tag text="XML" />
            </div>
            <a
              href="https://github.com/JigmePwangyel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/link.png"
                alt="Link Logo"
                width={20}
                height={20}
                className="py-6"
              />
            </a>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="rounded-lg shadow bg-white flex flex-col lg:flex-row overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div
            className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-gray-50"
            id="card_color"
          >
            <Image
              src="/Portfolio/rice_disease_detector/rice_disease_screenshot.png"
              alt="Rice Disease Detector"
              width={400}
              height={400}
              className="max-w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 p-6">
            <h4 className="font-bold text-xl mb-4">Rice Disease Detector</h4>
            <p className="mb-4 text-xs sm:text-sm md:text-sm lg:text-sm">
              A web application integrated with a VGG19-based AI model that
              detects rice plant diseases from leaf images, enabling fast
              diagnosis and better crop management.
            </p>
            <div className="flex flex-wrap gap-2">
              <Tag text="AI" />
              <Tag text="Convolution Neural Network" />
              <Tag text="VGG19" />
              <Tag text="ReactJS" />
              <Tag text="Flask" />
            </div>
            <a
              href="https://github.com/JigmePwangyel/Rice-Leaf-Disease-Detector"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/link.png"
                alt="Link Logo"
                width={20}
                height={20}
                className="py-6"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
