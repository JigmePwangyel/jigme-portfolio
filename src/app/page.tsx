import Navbar from "@/app/ui/navbar";
import Home from "@/app/ui/home";
import About from "@/app/ui/about";
import Skills from "@/app/ui/skills";
import Portfolio from "@/app/ui/portfolio";
import Contact from "@/app/ui/contact";
import Footer from "@/app/ui/footer";

export default function Page() {
  return (
    <>
      {/* Fixed navbar with improved responsive styling */}
      <div className="sticky top-0 z-20 w-full bg-white" id="navbar">
        <Navbar />
        <div className="w-full border-t border-gray-200"></div>
      </div>

      {/* Main content with responsive padding */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-16 xl:px-22 max-w-7xl mx-auto">
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </div>

      {/* Footer section */}
      <div className="w-full border-t border-gray-300 mt-8 sm:mt-12 md:mt-16"></div>
      <Footer />
    </>
  );
}
