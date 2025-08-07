import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PropsButtonContact {
  imageSrc: string;
  name: string;
  designation?: string;
}

const ButtonContact = ({ imageSrc, name, designation }: PropsButtonContact) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style jsx>{`
        @keyframes spin-reverse {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      {/* Tooltip animado - ahora centrado */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 10,
              },
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            className="absolute -top-16 z-50 flex flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
          >
            <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
            <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
            <div className="relative z-30 text-base font-bold text-white">
              {name}
            </div>
            {designation && (
              <div className="text-xs text-white">{designation}</div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón con efecto de gradiente giratorio */}
      <button className="relative inline-flex h-16 w-16 overflow-hidden rounded-full p-[2px] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-50 active:scale-95">
        <span
          className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-80 transition-all duration-300 group-hover:opacity-100"
          style={{
            animation: "spin-reverse 4s linear infinite",
            animationDuration: "4s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.animationDuration = "1s")}
          onMouseLeave={(e) => (e.currentTarget.style.animationDuration = "4s")}
        />

        <span className="relative z-10 inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950/90 px-3 py-1 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 group-hover:bg-slate-950/80">
          <img
            src={imageSrc}
            alt={name}
            className="h-10 w-10 transition-all duration-300 group-hover:scale-110 group-hover:brightness-125"
          />
        </span>
      </button>
    </div>
  );
};

export default ButtonContact;
