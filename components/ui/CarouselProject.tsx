"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects2 } from "@/data";
import Image from "next/image";
import ProjectModal from "./ProjectModal";

interface SlideData {
  title: string;
  img: string;
  id: string;
  des: string;
  category: string;
  iconLists: string[];
  link: string;
  fullDescription?: string;
  year?: string;
  client?: string;
  tools?: string[];
  outcome?: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
  onModalOpen: (project: SlideData) => void;
}

const Slide = ({
  slide,
  index,
  current,
  handleSlideClick,
  onModalOpen,
}: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const { img, title, id, des, iconLists, category } = slide;

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onModalOpen(slide);
  };

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[90vmin] h-[140vmin] lg:w-[120vmin] md:h-[70vmin] lg:h-[50vmin] mx-[4vmin] z-10 "
        onClick={() => handleSlideClick(index)}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <button
          onClick={handleCardClick}
          className="h-full w-full cursor-pointer text-left"
          type="button"
        >
          <div
            className="card-zoom-animation overflow-hidden rounded-3xl rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden p-6 flex flex-col lg:flex-row h-full gap-6"
            style={{
              opacity: current === index ? 1 : 0.2,
            }}
          >
            <div className="relative w-full h-full overflow-hidden rounded-2xl lg:rounded-3xl">
              <Image
                className="inset-0 w-[100%] h-[100%] object-cover opacity-100 transition-opacity duration-600 ease-in-out"
                style={{
                  opacity: current === index ? 1 : 0.2,
                }}
                alt={title}
                src={img}
                onLoadingComplete={(imgEl) => {
                  imgEl.style.opacity = "1";
                }}
                fill
                priority
                sizes="(max-width: 1024px) 120vw, 120vw"
              />
              {current === index && (
                <div className="absolute inset-0 transition-all duration-1000" />
              )}
            </div>
            <div className="flex flex-col justify-between">
              <div className="m-3">
                <span className="rounded-full bg-purple px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-900">
                  {category}
                </span>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base m-3">
                {title}
              </h1>

              <p
                className="text-sm lg:text-md lg:font-normal font-light m-3"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {des}
              </p>

              <div className="flex items-center items-center justify-between m-3 flex-col gap-2 md:flex-row">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={`${id}-${index}`}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt={`${title} icon ${index}`}
                        className="p-2"
                        width={32}
                        height={32}
                        unoptimized
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex text-xs text-purple">
                    Check out this project
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </div>
          </div>
        </button>
      </li>
    </div>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export function CarouselProject({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [selectedProject, setSelectedProject] = useState<SlideData | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const handleModalOpen = (project: SlideData) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const id = useId();

  return (
    <>
      <div
        className="relative w-[90vmin] lg:w-[120vmin] h-[140vmin] md:h-[70vmin] lg:h-[50vmin] mx-auto"
        aria-labelledby={`carousel-heading-${id}`}
      >
        <ul
          className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${current * (100 / slides.length)}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <Slide
              key={index}
              slide={slide}
              index={index}
              current={current}
              handleSlideClick={handleSlideClick}
              onModalOpen={handleModalOpen}
            />
          ))}
        </ul>

        <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
          <CarouselControl
            type="previous"
            title="Go to previous slide"
            handleClick={handlePreviousClick}
          />

          <div className="flex justify-center items-center top-[calc(100%+4rem)] gap-2 px-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideClick(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  current === index
                    ? "bg-purple scale-125"
                    : "bg-neutral-400/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <CarouselControl
            type="next"
            title="Go to next slide"
            handleClick={handleNextClick}
          />
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={handleModalClose}
      />
    </>
  );
}

interface CarouselWrapperProps {
  type: "desing" | "backEnd" | "frontEnd" | "appMobile";
}

export default function CarouselWrapper({ type }: CarouselWrapperProps) {
  const projectList = projects2[0][type] || [];

  return <CarouselProject slides={projectList} />;
}
