import Navbar from "@/app/ui/navbar";
import Home from "@/app/ui/home";
import About from "@/app/ui/about";
import Skills from "@/app/ui/skills";
export default function Page() {
  return (
    <>
      <div className="sticky top-0 z-20" id="navbar">
        <Navbar />
        <div className="w-full border-t border-gray-200 mb-28"></div>
      </div>
      <div className="mx-22 ">
        <Home />
        <About />
        <Skills />
      </div>
    </>
  );
}
