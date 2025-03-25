import Navbar from "@/app/ui/navbar";
import Home from "@/app/ui/home";
export default function Page() {
  return (
    <>
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <div className="w-full border-t border-gray-200"></div>
      <div className="ml-22 mr-22">
        <Home />
      </div>
    </>
  );
}
