import Image from "next/image";

export default function HomeContent() {
  return (
    <>
      <div className="flex h-full items-center gap-x-32 ">
        <div className="flex flex-col items-center justify-center gap-4 h-full">
          <a href="https://instagram.com/wangyeljigme">
            <Image
              src="/instagram.png"
              alt="Instagram Logo"
              width={25}
              height={25}
            />
          </a>
          <a href="https://github.com/JigmePwangyel">
            <Image src="/github.png" alt="Github Logo" width={25} height={25} />
          </a>
          <a href="https://www.linkedin.com/in/jigme-phuntsho-wangyel-357762239/?originalSubdomain=bt">
            <Image
              src="/linkedin.png"
              alt="Linkedin Logo"
              width={25}
              height={25}
            />
          </a>
        </div>
        <div className="w-fit ">
          <p className=" font-medium text-3xl w-fit mb-4">Hello, I'm Jigme,</p>
          <span className="font-extrabold text-8xl w-fit">
            Full Stack Developer
          </span>
          <p className=" font-medium text-3xl w-fit mt-4">based in Bhutan</p>
          <div className="mt-20">
            <div className="flex items-center gap-x-3">
              <Image src="/mouse.svg" alt="Mouse Logo" width={20} height={20} />
              <p className="font-semibold">Scroll down</p>
              <Image src="/arrow.png" alt="Arrow Logo" width={10} height={10} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/Headshot.png"
          alt="Headshot Logo"
          width={600}
          height={600}
        />
      </div>
    </>
  );
}
