import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/Footer";
import HeroBlogDetail from "@/components/HeroBlogDetail";
import { PageProps } from "@/.next/types/app/layout";
import { NextPage } from "next";

interface PageBlogDetailProps extends PageProps {
  params: {
    id: string;
  } & Awaited<PageProps["params"]>; // Asegura compatibilidad con Promise
}

export default async function PageBlogDetail({ params }: PageBlogDetailProps) {
  const { id } = params;

  return (
    <main className="relative bg-black-100 flex flex-col items-center overflow-hidden mx-auto min-h-screen">
      <div className="w-full max-w-7xl sm:px-10 px-5">
        <FloatingNav navItems={navItems} />
        <HeroBlogDetail postId={id} />
      </div>
      <div className="w-full max-w-7xl">
        <Footer />
      </div>
    </main>
  );
}
