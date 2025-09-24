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
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto px-5 sm:px-10 ">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Title
          title="My Work "
          title2="Experience"
          button={true}
          titlebutton="See all about me"
          positionButton="right"
          link="/about"
        />
        <Experience />
        <Title
          title="A small selection of "
          title2="recent projects"
          button={true}
          titlebutton="See all projects"
          positionButton="right"
          link="/projects"
        />
        <RecentProjects />
        <Title
          title="My "
          title2="Services"
          button={true}
          titlebutton="See all services"
          positionButton="right"
          link="/service"
        />
        <CardService />
        <Title
          title="My Article"
          title2="Blog"
          button={true}
          titlebutton="See all blogs"
          positionButton="right"
          link="/blog"
        />
        <CardBlog />
        <Footer />
      </div>
    </main>
  );
}
