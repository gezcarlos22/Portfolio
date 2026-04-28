"use client";

import { useState } from "react";
import CarouselWrapper from "./ui/CarouselProject";

type CategoryType = "desing" | "backEnd" | "frontEnd" | "appMobile";

interface Category {
  id: CategoryType;
  label: string;
  title: string;
}

const categories: Category[] = [
  { id: "desing", label: "UX/UI Design", title: "UX/UI Design" },
  { id: "backEnd", label: "Back End", title: "Back End" },
  { id: "frontEnd", label: "Front End", title: "Front End" },
  { id: "appMobile", label: "App Mobile", title: "App Mobile" },
];

const RecentProjects = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryType>("desing");

  return (
    <div className="w-full flex flex-col gap-12">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 px-5 sm:px-10">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-2 rounded-full font-semibold text-sm transition duration-300 ${
              selectedCategory === category.id
                ? "bg-purple text-black"
                : "bg-neutral-800 text-white hover:bg-neutral-700"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div key={selectedCategory}>
        <CarouselWrapper type={selectedCategory} />
      </div>
    </div>
  );
};

export default RecentProjects;
