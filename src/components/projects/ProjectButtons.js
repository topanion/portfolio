import { useState, useEffect } from "react";
import { StretchIn } from "../animation/StretchIn";

export default function ProjectButtons({
  current,
  setCurrent,
  projectButtons,
}) {
  useEffect(() => {}, [current]);

  const buttons = projectButtons?.map((e, i) => {
    return (
      <div
        key={`project button ${i}`}
        className={`flex flex-col hover:cursor-pointer font-semibold md:text-xl h-8 
        `}
        onClick={() => setCurrent(e.value)}
      >
        <div className="mx-auto">{e.button}</div>
        {current === e.value && (
          <StretchIn>
            <div className="border-b-2 border-gray-600 mt-1"></div>
          </StretchIn>
        )}
      </div>
    );
  });

  return <div className="max-md:px-[5%] gap-2 flex flex-row">{buttons}</div>;
}
