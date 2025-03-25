import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="pt-8 pb-8 ml-22 mr-22">
      <div className="flex flex-wrap items-center justify-between w-full">
        <Link href="/">
          <span className="font-extrabold text-2xl">Jigme</span>
        </Link>
        <div className="w-96">
          <ul className="flex items-center justify-between">
            <li className="text-gray font-medium relative group cursor-pointer">
              Home
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
            </li>
            <li className="text-gray font-medium relative group cursor-pointer">
              About
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
            </li>
            <li className="text-gray font-medium relative group cursor-pointer">
              Skills
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
            </li>
            <li className="text-gray font-medium relative group cursor-pointer">
              Portfolio
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
            </li>
            <li className="text-gray font-medium relative group cursor-pointer">
              Contact
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
