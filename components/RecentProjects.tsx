"use client";

import { projects } from "@/data";
import CardProjects from "./CardProyects";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-12">
      {projects.slice(0, 3).map((post, item) => (
        <Link href={post.link} key={post.id} title={post.title} target="_blank">
          <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
            <CardProjects project={post} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecentProjects;
