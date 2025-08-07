"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

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
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full flex-wrap mb-2",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-4 py-2 rounded-full", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full ",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block text-black dark:text-white">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn(contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn(
            "w-full h-full absolute top-0 left-0 flex items-center justify-center",
            className
          )}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
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

const TabImageContent = ({ text, image }: { text: string; image: string }) => {
  return (
    <div className="w-full h-full flex flex-col rounded-3xl bg-white dark:bg-white overflow-hidden">
      <div className="p-4 pb-2 flex-none">
        <p className="text-xl md:text-4xl font-bold text-black dark:text-black">
          {text}
        </p>
      </div>
      <div className="flex-grow relative">
        <img
          src={image}
          alt="tab content"
          className="absolute inset-0 w-full h-full object-cover object-center rounded-b-2xl"
        />
      </div>
    </div>
  );
};
