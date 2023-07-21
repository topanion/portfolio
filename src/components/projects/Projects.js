import CenteredTitle from "../CenteredTitle";
import ProjectButtons from "./ProjectButtons";
import { useEffect, useState } from "react";
import ProjectDisplay from "./ProjectDisplay";
import { nextProjects } from "@/content/projects/next";
import { reactProjects } from "@/content/projects/react";
import { SlideIn } from "../animation/SlideIn";

const buttons = [
  {
    button: "NEXT",
    value: 1,
  },
  {
    button: "REACT - JS ",
    value: 2,
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(1);

  useEffect(() => {}, [current]);

  const projects = {
    1: nextProjects,
    2: reactProjects,
  };

  return (
    <div
      id="projects"
      className="py-7 pb-10 w-screen bg-slate-700 px-[5%]  md:px-[12%] lg:px-[20%] text-white"
    >
      <div className="w-full sm:flex sm:flex-col">
        <CenteredTitle addedClassname={"my-6 font-bold border-white"}>
          WORKS
        </CenteredTitle>
        <div className="w-full flex flex-col gap-6">
          <ProjectButtons
            projectButtons={buttons}
            current={current}
            setCurrent={setCurrent}
          />
          <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-md:gap-1">
            {projects[current]?.map((e, i) => {
              return (
                <div
                  key={"project " + i + " from ctg " + current}
                  className={`animate-fade-in w-full flex grow-0`}
                >
                  <div className="relative h-full w-full m-auto">
                    <ProjectDisplay {...e} project={...e} from={i % 2 === 0 ? "left" : "right"}/>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
