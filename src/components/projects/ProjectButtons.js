import { useState, useEffect } from "react";

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
          <div className="stretch-fade-in border-b-2 border-white mt-1"></div>
        )}
      </div>
    );
  });

  return <div className=" gap-2 flex flex-row">{buttons}</div>;
}
