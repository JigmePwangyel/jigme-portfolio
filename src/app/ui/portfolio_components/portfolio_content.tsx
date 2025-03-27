import React from "react";
import Image from "next/image";

import Tag from "@/app/ui/portfolio_components/tag_component";

export default function PortfolioComponent() {
  return (
    <div className="flex flex-col h-full w-full items-center">
      <h2 className="px-20 py-5 font-extrabold text-3xl">Portfolio</h2>
      <p className="mb-20">Things I&apos;ve Built</p>

      <div className="flex flex-col gap-y-12 w-full px-28">
        <div className="rounded-lg shadow bg-white h-96 flex">
          <div
            className="w-1/2 flex items-center justify-center"
            id="card_color"
          >
            <Image
              src="/Portfolio/Picture.png"
              alt="Arrow Logo"
              width={400}
              height={400}
            />
          </div>
          <div className="w-1/2 p-10">
            <h4 className="font-bold text-lg mb-4">ConvoCloud</h4>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <div className="flex flex-wrap gap-2 w-full">
              <Tag text="React" />
              <Tag text="MongoDB" />
              <Tag text="Express JS" />
            </div>
            <a href="#">
              <Image
                src="/link.png"
                alt="Link Logo"
                width={20}
                height={20}
                className="py-6"
              />
            </a>
          </div>
        </div>
        <div className="rounded-lg shadow bg-white h-96 flex">
          <div className="w-1/2 p-10">
            <h4 className="font-bold text-lg mb-4">ConvoCloud</h4>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <div className="flex flex-wrap gap-2 w-full">
              <Tag text="React" />
              <Tag text="MongoDB" />
              <Tag text="Express JS" />
            </div>
            <a href="#">
              <Image
                src="/link.png"
                alt="Link Logo"
                width={20}
                height={20}
                className="py-6"
              />
            </a>
          </div>
          <div
            className="w-1/2 flex items-center justify-center"
            id="card_color"
          >
            <Image
              src="/Portfolio/Picture.png"
              alt="Arrow Logo"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
