import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/Footer";
import HeroService from "@/components/HeroService";
import HeroTitle from "@/components/HeroTitle";

export default async function PageService() {
  return (
    <main className="relative bg-black-100 flex flex-col items-center overflow-hidden mx-auto min-h-screen">
      <div className="w-full max-w-7xl sm:px-10 px-5">
        <FloatingNav navItems={navItems} />
        <HeroTitle title="Turning creative vision into digital value" />
        <HeroService />
      </div>
      <div className="w-full max-w-7xl">
        <Footer />
      </div>
    </main>
  );
}
