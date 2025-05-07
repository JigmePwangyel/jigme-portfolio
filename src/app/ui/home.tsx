// home.tsx
"use client";

import HomeContent from "@/app/ui/home_components/home_content";

export default function Home() {
  return (
    <section
      className="h-full py-16 sm:py-16 md:py-16 lg:py-20 xl:py-24"
      id="home"
    >
      <div className="flex h-full items-center justify-between px-2 sm:px-6 md:px-12 lg:px-16">
        <HomeContent />
      </div>
    </section>
  );
}
