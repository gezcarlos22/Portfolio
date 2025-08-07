"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/Pin";
import Link from "next/link";

interface ProjectData {
  id: string;
  title: string;
  title2?: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
}

interface CardProjectsProps {
  project: ProjectData;
}

const CardProjects = ({ project }: CardProjectsProps) => {
  return (
    <PinContainer title={project.title2 || project.title} href={project.link}>
      <Link href={project.link} target="_blank">
        <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
          <div
            className="relative w-full h-full overflow-hidden lg:rounded-3xl"
            style={{ backgroundColor: "#13162D" }}
          >
            <img
              src={project.img}
              alt={`${project.title} cover`}
              className="z-10 absolute bottom-0"
            />
          </div>
        </div>

        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
          {project.title}
        </h1>

        <p
          className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
          style={{
            color: "#BEC1DD",
            margin: "1vh 0",
          }}
        >
          {project.des}
        </p>

        <div className="flex items-center justify-between mt-7 mb-3">
          <div className="flex items-center">
            {project.iconLists.map((icon, index) => (
              <div
                key={`${project.id}-${index}`}
                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * index + 2}px)`,
                }}
              >
                <img
                  src={icon}
                  alt={`${project.title} icon ${index}`}
                  className="p-2"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center">
            <p className="flex lg:text-l md:text-s text-m text-purple">
              Check out this project
            </p>
            <FaLocationArrow className="ms-3" color="#CBACF9" />
          </div>
        </div>
      </Link>
    </PinContainer>
  );
};

export default CardProjects;
