"use client";

import { dataTestimonials, navItems, socialMedia } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/Footer";
import Studies from "@/components/Studies";
import Skills from "@/components/Skills";
import ButtonContact from "@/components/ui/ButtonContact";
import { AnimatedTestimonials } from "@/components/ui/AnimatedTestimonials";
import HeroTitle from "@/components/HeroTitle";

const About = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <HeroTitle title="My passion: turning ideas into digital experiences." />
        <AnimatedTestimonials testimonials={dataTestimonials} />
        <div className="flex item-center justify-center gap-10">
          {socialMedia.map((social, index) => (
            <ButtonContact
              key={index}
              imageSrc={social.img}
              name={social.name}
            />
          ))}
        </div>
        <Studies />
        <Skills />
        <Footer />
      </div>
    </main>
  );
};

export default About;
