"use client";

import React, { useEffect } from "react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";
import Image from "next/image";

interface ProjectModalProps {
  isOpen: boolean;
  project: {
    id: string;
    title: string;
    des: string;
    fullDescription?: string;
    img: string;
    category: string;
    iconLists: string[];
    link: string;
    year?: string;
    client?: string;
    tools?: string[];
    outcome?: string;
  } | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  project,
  onClose,
}) => {
  // Prevenir scroll en el body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm" />

      {/* Modal Container */}
      <div
        className="relative bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl shadow-2xl border border-white/[0.1] w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Fixed Position */}
        <button
          onClick={onClose}
          className="sticky top-4 right-4 float-right z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition duration-300 mb-4"
        >
          <FaTimes className="text-white text-lg" />
        </button>

        {/* Content */}
        <div className="p-6 sm:p-8 pt-0">
          {/* Project Image */}
          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-6">
            <Image
              src={project.img}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Category Badge */}
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="rounded-full bg-purple px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-900">
              {project.category}
            </span>
            {project.year && (
              <span className="rounded-full bg-gray-700 px-4 py-2 text-xs font-semibold text-gray-200">
                {project.year}
              </span>
            )}
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {project.title}
          </h2>

          {/* Client Info */}
          {project.client && (
            <div className="mb-4 pb-4 border-b border-white/[0.1]">
              <p className="text-sm text-gray-400">Client</p>
              <p className="text-white font-semibold">{project.client}</p>
            </div>
          )}

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              About this project
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {project.fullDescription || project.des}
            </p>
          </div>

          {/* Outcome */}
          {project.outcome && (
            <div className="mb-6 p-4 bg-purple/20 rounded-lg border border-purple/50">
              <h3 className="text-lg font-semibold text-white mb-2">Results</h3>
              <p className="text-gray-300">{project.outcome}</p>
            </div>
          )}

          {/* Tools Used */}
          {project.tools && project.tools.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Icons List */}
          {project.iconLists && project.iconLists.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Technologies
              </h3>
              <div className="flex items-center gap-1 flex-wrap">
                {project.iconLists.map((icon, index) => (
                  <div
                    key={`${project.id}-${index}`}
                    className="border border-white/[0.2] rounded-full bg-black lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center"
                  >
                    <Image
                      src={icon}
                      alt={`technology ${index}`}
                      className="p-2"
                      width={40}
                      height={40}
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Button */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-6 py-3 mt-6 bg-purple text-black font-semibold rounded-lg hover:bg-purple/90 transition duration-300 gap-2"
          >
            View Project
            <FaLocationArrow className="text-sm" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
