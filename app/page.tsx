import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import CardBlog from "@/components/ui/CardBlog";
import CardService from "@/components/ui/CardService";
import Title from "@/components/ui/Title";

export default async function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Title title="My Work " title2="Experience" />
        <Experience />
        <Title title="A small selection of " title2="recent projects" />
        <RecentProjects />
        <Title title="My " title2="Services" />
        <CardService />
        <Title title="My Article" title2="Blog" />
        <CardBlog />
        <Footer />
      </div>
    </main>
  );
}
