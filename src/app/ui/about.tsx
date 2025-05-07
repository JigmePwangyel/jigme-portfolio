"use client";

import AboutComponent from "@/app/ui/about_components/about_content";

export default function About() {
  return (
    <section
      className="py-8 sm:py-12 md:py-16 lg:py-20 mb-12 sm:mb-16 md:mb-20 lg:mb-24"
      id="about"
    >
      <AboutComponent />
    </section>
  );
}
