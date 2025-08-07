"use client";

import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/Footer";
import HeroProyectDetail from "@/components/HeroProjectDetail";

interface PageProjectDetailProps {
  params: {
    id: string;
  };
}

const PageProjectDetail = ({ params }: PageProjectDetailProps) => {
  const { id } = params;

  return (
    <main className="relative bg-black-100 flex flex-col items-center overflow-hidden mx-auto min-h-screen">
      <div className="w-full max-w-7xl sm:px-10 px-5">
        <FloatingNav navItems={navItems} />
        <HeroProyectDetail postId={id} />
      </div>
      <div className="w-full max-w-7xl">
        <Footer />
      </div>
    </main>
  );
};

export default PageProjectDetail;
