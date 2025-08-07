"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex fixed z-[5000] top-10 left-0 right-0 mx-auto w-[92%] max-w-7xl px-8 py-3 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-between",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {/* Logo y nombre */}
        <div className="flex items-center flex-shrink-0">
          <div className="w-12 h-10 relative mr-2">
            <Image
              src="/logo.png"
              alt="Gez Carlos Logo"
              className="rounded-full object-cover"
              width={48}
              height={40}
              priority
            />
          </div>
          <span className="text-white font-medium">Gez Carlos</span>
        </div>

        {/* Menú central en pantallas grandes */}
        <div className="hidden md:flex items-center justify-center flex-grow mx-8">
          <div className="flex space-x-6">
            {navItems.map((navItem, idx) => (
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                className="relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300"
              >
                <span className="text-md cursor-pointer">{navItem.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Botón de contacto en pantallas grandes */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/contact">
            <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-6 py-2 rounded-full">
              <span>Contact</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
            </button>
          </Link>
        </div>

        {/* Botón hamburguesa - solo en sm */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      {/* Menú desplegable móvil */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex justify-center items-center fixed top-28 left-4 right-4 z-[5000] border border-white/10 rounded-xl p-6 flex-col space-y-4 md:hidden"
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
        >
          {navItems.map((navItem, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              href={navItem.link}
              onClick={() => setMenuOpen(false)}
              className="text-white text-lg hover:text-neutral-300"
            >
              {navItem.name}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            <button className="border text-lg font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-6 py-2 rounded-full">
              <span>Contact</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
            </button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
