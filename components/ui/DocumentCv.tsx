"use client";

import { cloneElement, isValidElement, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const activeTab = propTabs[activeIndex];
  const modalImages = propTabs.map((tab) =>
    isValidElement(tab.content) ? (tab.content as any).props.image : null,
  );
  const modalImage = modalIndex !== null ? modalImages[modalIndex] : null;

  const handleSelectTab = (index: number) => {
    setActiveIndex(index);
    setIsDropdownOpen(false);
  };

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev - 1 + propTabs.length) % propTabs.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % propTabs.length);
  };

  const handleImageClick = () => {
    setModalIndex(activeIndex);
  };

  const closeModal = () => {
    setModalIndex(null);
  };

  const handleModalPrevious = () => {
    setModalIndex((prev) =>
      prev !== null ? (prev - 1 + propTabs.length) % propTabs.length : null,
    );
  };

  const handleModalNext = () => {
    setModalIndex((prev) =>
      prev !== null ? (prev + 1) % propTabs.length : null,
    );
  };

  const renderActiveContent = () => {
    if (isValidElement(activeTab.content)) {
      return cloneElement(activeTab.content as any, {
        onImageClick: handleImageClick,
      });
    }

    return activeTab.content;
  };

  return (
    <>
      <div
        className={cn("relative w-full max-w-5xl mx-auto", containerClassName)}
      >
        <div className="relative flex w-full flex-col items-stretch">
          <button
            type="button"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="group relative flex w-full h-full items-center justify-between overflow-hidden rounded-full p-1 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-50 active:scale-95"
          >
            <span className="absolute inset-0 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-80 transition-all duration-300 group-hover:opacity-100" />
            <span className="relative z-10 flex w-full items-center justify-between gap-3 rounded-full bg-slate-950/90 p-4 text-sm font-semibold text-white backdrop-blur-md">
              <span className="text-sm lg:text-lg">{activeTab.title}</span>
              <span className="text-xs text-slate-300">
                {isDropdownOpen ? "Cerrar" : "Seleccionar"}
              </span>
            </span>
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full mt-3 z-40 w-full max-h-80 overflow-y-auto border border-white/10 bg-slate-950/95 shadow-2xl backdrop-blur-xl"
              >
                {propTabs.map((tab, idx) => (
                  <li
                    key={tab.value}
                    className="border-b border-white/10 last:border-b-0"
                  >
                    <button
                      type="button"
                      onClick={() => handleSelectTab(idx)}
                      className={cn(
                        "w-full px-4 py-4 text-left transition",
                        activeIndex === idx
                          ? "bg-white/10 text-white"
                          : "text-slate-300 hover:bg-white/5",
                      )}
                    >
                      {tab.title}
                    </button>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        <div className={cn("mt-8 w-full h-full", contentClassName)}>
          <motion.div
            key={activeTab.value}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            className="h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/95 shadow-[0_18px_50px_rgba(15,23,42,0.12)] dark:bg-slate-950/95"
          >
            <div className="p-6 pb-4">
              <h2 className="text-xl md:text-4xl font-bold text-slate-950 dark:text-white">
                {activeTab.title}
              </h2>
            </div>
            {renderActiveContent()}
          </motion.div>
        </div>

        <div className="mt-6 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {propTabs.map((_, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => handleSelectTab(idx)}
                className={cn(
                  "h-3 w-3 rounded-full transition-all duration-200",
                  activeIndex === idx
                    ? "bg-purple scale-125"
                    : "bg-neutral-400/50 hover:bg-neutral-300",
                )}
                aria-label={`Ir a sección ${idx + 1}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-transparent hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
              title="Anterior"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-transparent hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
              title="Siguiente"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      <FullScreenImageModal
        isOpen={modalImage !== null}
        image={modalImage}
        title={activeTab.title}
        onClose={closeModal}
        onPrev={handleModalPrevious}
        onNext={handleModalNext}
      />
    </>
  );
};

export function TabsDemo() {
  const tabs = [
    {
      title: "Data science and IA",
      value: "Data science and IA",
      content: (
        <TabImageContent
          text="Data science and IA"
          image="/Certifications/ciencia_de_datos.jpeg"
        />
      ),
    },
    {
      title: "Testing QA",
      value: "Testing QA",
      content: (
        <TabImageContent
          text="Testing QA"
          image="/Certifications/testing.jpeg"
        />
      ),
    },
    {
      title: "Full Stack Junior",
      value: "Full Stack Junior",
      content: (
        <TabImageContent
          text="Full Stack Junior"
          image="/Certifications/full_stack.jpeg"
        />
      ),
    },
    {
      title: "React Native",
      value: "React Native",
      content: (
        <TabImageContent
          text="React Native"
          image="/Certifications/react_native.png"
        />
      ),
    },
    {
      title: "UX/UI Design",
      value: "ux_ui",
      content: (
        <TabImageContent
          text="UX/UI Design"
          image="/Certifications/ux_ui.jpeg"
        />
      ),
    },
    {
      title: "UX/UI Design Advanced",
      value: "ux_ui_advanced",
      content: (
        <TabImageContent
          text="UX/UI Design Advanced"
          image="/Certifications/ux_ui_avanzado.jpeg"
        />
      ),
    },
    {
      title: "UX de Google",
      value: "ux-google",
      content: (
        <TabImageContent
          text="UX de Google"
          image="/Certifications/ux_google.jpeg"
        />
      ),
    },
    {
      title: "Análisis de Datos de Google",
      value: "ADG",
      content: (
        <TabImageContent
          text="Análisis de Datos de Google"
          image="/Certifications/analista_de_datos_google.jpeg"
        />
      ),
    },
    {
      title: "Soporte de IT de Google",
      value: "SIT",
      content: (
        <TabImageContent
          text="Soporte de IT de Google"
          image="/Certifications/iot_google.jpeg"
        />
      ),
    },
    {
      title: "Marketing Digital e E-commerce de Google",
      value: "Marketing",
      content: (
        <TabImageContent
          text="Marketing Digital e E-commerce de Google"
          image="/Certifications/marketing_google.jpeg"
        />
      ),
    },
    {
      title: "Operating Systems Basics",
      value: "OSB",
      content: (
        <TabImageContent
          text="Operating Systems Basics"
          image="/Certifications/operating_systems_basics.jpeg"
        />
      ),
    },
    {
      title: "SEO",
      value: "seo",
      content: <TabImageContent text="SEO" image="/Certifications/seo.png" />,
    },
    {
      title: "Project Management with Agile Methodologies",
      value: "PMA",
      content: (
        <TabImageContent
          text="Project Management with Agile Methodologies"
          image="/Certifications/gestion_proyectos_agiles.jpeg"
        />
      ),
    },
    {
      title: "Project Management via Smartphone",
      value: "PMS",
      content: (
        <TabImageContent
          text="Project Management via Smartphone"
          image="/Certifications/gestion_proyectos_smartphone.jpeg"
        />
      ),
    },

    {
      title: "Scrum Fundamentals",
      value: "scrum",
      content: (
        <TabImageContent
          text="Scrum Fundamentals"
          image="/Certifications/scrum.jpeg"
        />
      ),
    },
  ];

  return (
    <div className="h-[35rem] md:h-[52rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start mt-10">
      <Tabs tabs={tabs} />
    </div>
  );
}

const FullScreenImageModal = ({
  isOpen,
  image,
  title,
  onClose,
  onPrev,
  onNext,
}: {
  isOpen: boolean;
  image: string | null;
  title: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) => {
  if (!isOpen || !image) return null;

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="absolute inset-0 h-screen w-screen overflow-hidden bg-slate-950 text-white"
          initial={{ scale: 0.98 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.98 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-20 rounded-full bg-black/60 px-3 py-2 text-white transition hover:bg-black/80"
          >
            ✕
          </button>
          <button
            type="button"
            onClick={onPrev}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 px-4 py-2 text-white transition hover:bg-black/80"
            aria-label="Anterior imagen"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={onNext}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 px-4 py-2 text-white transition hover:bg-black/80"
            aria-label="Siguiente imagen"
          >
            ›
          </button>
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain"
              sizes="80vw"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
};

const TabImageContent = ({
  text,
  image,
  onImageClick,
}: {
  text: string;
  image: string;
  onImageClick?: () => void;
}) => {
  return (
    <div className="w-full h-full flex flex-col bg-white dark:bg-white overflow-hidden rounded-[2rem]">
      <div
        className="relative flex-grow min-h-[8rem] sm:min-h-[8rem] md:min-h-[24rem] lg:min-h-[30rem] cursor-pointer overflow-hidden"
        onClick={onImageClick}
      >
        <Image
          src={image}
          alt={text}
          fill
          className="absolute inset-0 w-full h-full object-cover object-center transition duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 700px"
          priority
        />
      </div>
    </div>
  );
};
