import HomeContent from "@/app/ui/home_components/home_content";

export default function Home() {
  return (
    <section className="h-full mb-28" id="home">
      <div className="flex h-full items-center justify-between lg:mx-12 ">
        <HomeContent />
      </div>
    </section>
  );
}
