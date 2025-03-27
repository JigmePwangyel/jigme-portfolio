import Image from "next/image";

export default function SkillsContent() {
  return (
    <div className="flex flex-col h-full w-full items-center">
      <h2 className="px-20 py-5 font-extrabold text-3xl">Skills</h2>
      <p className="mb-20">
        Skills & Technologies - The Tools of My Trade and Debugging Nightmares
      </p>
      <div className="grid grid-cols-5 gap-x-32 gap-y-20">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/skills/react.png"
            alt="React Image"
            width={100}
            height={100}
          />
          <span>React</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/skills/tailwindcss.png"
            alt="Tailwind Image"
            width={100}
            height={100}
          />
          <span>Tailwind CSS</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/skills/nextjs.png"
            alt="NextJS Image"
            width={100}
            height={100}
          />
          <span>Next JS</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/skills/rails.png"
            alt="Rails Image"
            width={100}
            height={100}
          />
          <span>Ruby on Rails</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/skills/express.png"
            alt="Express Image"
            width={100}
            height={100}
          />
          <span>Express JS</span>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Image
            src="/skills/postgres.png"
            alt="Postgres Image"
            width={100}
            height={100}
          />
          <span>Postgres</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/skills/mongodb.png"
            alt="Mongo DB Image"
            width={100}
            height={100}
          />
          <span>Mongo DB</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/skills/odoo.png"
            alt="Odoo Image"
            width={100}
            height={100}
          />
          <span>Odoo</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src="/skills/figma.png" alt="Figma" width={100} height={100} />
          <span>Figma</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src="/skills/git.png" alt="Git" width={100} height={100} />
          <span>Git</span>
        </div>
      </div>
    </div>
  );
}
