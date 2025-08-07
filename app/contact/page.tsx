"use client";

import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { SignupFormDemo } from "@/components/Contact";
import FooterClean from "@/components/FooterClean";
import HeroTitle from "@/components/HeroTitle";

const PageContact = () => {
  return (
    <main className="relative bg-black-100 flex flex-col items-center overflow-hidden mx-auto min-h-screen">
      <div className="w-full max-w-7xl sm:px-10 px-5">
        <FloatingNav navItems={navItems} />
        <HeroTitle title="Let's bring your digital vision to life" />
        <SignupFormDemo />
        <FooterClean />
      </div>
    </main>
  );
};

export default PageContact;
