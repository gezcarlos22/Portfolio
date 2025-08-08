import React from "react";
import { Button, Button2 } from "./ui/MovingBorders";
import { hardSkills, softSkills, workExperience } from "@/data";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="py-10 w-full">
      <h1 className="heading">
        Know my strengths:{" "}
        <span className="text-purple">Soft & Hard Skills</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-6 grid-cols-3 gap-10">
        {hardSkills.map((card) => (
          <Button2
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 ">
              <Image
                src={card.image}
                alt={card.image}
                width={128} // adjust as needed
                height={128} // adjust as needed
                className="lg:w-32 md:w-20 w-16"
              />
            </div>
          </Button2>
        ))}
      </div>

      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
        {softSkills.map((card) => (
          <Button2
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={card.thumbnail}
                alt={card.thumbnail}
                width={128} // adjust as needed
                height={128} // adjust as needed
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-lg text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button2>
        ))}
      </div>
    </div>
  );
};

export default Skills;
