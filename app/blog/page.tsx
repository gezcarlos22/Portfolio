import { blogPosts, navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/Footer";
import CardBlog from "@/components/ui/CardBlog";
import Title from "@/components/ui/Title";
import { CarouselBlog } from "@/components/ui/CarouselBlog";
import HeroTitle from "@/components/HeroTitle";

export default async function PageBlog() {
  return (
    <main className="relative bg-black-100 flex flex-col items-center overflow-hidden mx-auto min-h-screen">
      <div className="w-full max-w-7xl sm:px-10 px-5">
        <FloatingNav navItems={navItems} />
        <HeroTitle title="My Space where I can inspire and be inspired" />
        <CarouselBlog slides={blogPosts} />
        <Title title="My Article " title2="Blog" />
        <CardBlog />
        <Footer />
      </div>
    </main>
  );
}
