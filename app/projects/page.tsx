"use client";

import { heroProyects, navItems, projects } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/Footer";
import HeroProyects from "@/components/HeroProjects";
import CarouselWrapper from "@/components/ui/CarouselProject";
import Title from "@/components/ui/Title";

const Projects = () => {
  return (
    <main className="relative bg-black-100 flex flex-col items-center overflow-hidden mx-auto min-h-screen">
      <div className="w-full max-w-7xl sm:px-10 px-5">
        <FloatingNav navItems={navItems} />
      </div>
      <div className="w-full">
        <HeroProyects products={heroProyects} />
        <Title title="Projects " title2="UX/UI Desing" />
        <CarouselWrapper type="desing" />

        <Title title="Projects " title2="Back End" />
        <CarouselWrapper type="backEnd" />

        <Title title="Projects " title2="Front End" />
        <CarouselWrapper type="frontEnd" />

        <Title title="Projects " title2="App Mobile" />
        <CarouselWrapper type="appMobile" />
      </div>
      <div className="w-full max-w-7xl">
        <Footer />
      </div>
    </main>
  );
};

export default Projects;
