import Image from "next/image";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { SlideIn } from "../animation/SlideIn";

export default function ProjectDisplay({
  project,
  large,
  phone,
  title,
  background,
  description,
  from,
}) {
  const [hovered, setHovered] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);

  const style = background
    ? {
        backgroundImage: `url("${background}")`,
        backgroundSize: `cover`,
      }
    : {};

  return (
    <>
      {modalOpened && (
        <ProjectModal {...project} close={() => setModalOpened(false)} />
      )}
      <SlideIn from={from}>
        <div className="w-full h-full" style={style}>
          <div
            onMouseEnter={() => {
              setHovered(true);
            }}
            onMouseLeave={() => {
              setHovered(false);
            }}
            className="absolute w-full h-full z-20 flex flex-col"
          >
            {/* closing background with details on project */}

            {hovered && (
              <div className="w-full h-full flex max-md:text-sm">
                {/* content */}

                <div className="m-auto px-5 py-2 flex flex-col z-20 gap-6">
                  <p>{title}</p>
                  <p>{description}</p>
                  <div className="grow flex justify-end">
                    <div
                      className="p-3 border border-white w-fit hover:cursor-pointer"
                      onClick={() => setModalOpened(true)}
                    >
                      See more
                    </div>
                  </div>
                </div>

                {/* bg part */}

                <div className="absolute height-stretch bg-black/70 w-full h-[50%]"></div>
                <div className="absolute height-stretch bg-black/70 w-full h-[50.28%] bottom-0"></div>
              </div>
            )}
          </div>
          {/* Images */}
          <div className="relative px-3 h-full animate-fade-in pt-[5%] pb-[21%] z-10">
            {large && (
              <img
                className="max-w-[90%] max-h-[30vh] shadow-xl rounded-md"
                src={large}
                alt="app on big screen"
              />
            )}
            {phone && (
              <img
                className="absolute h-[65%] z-10 top-[25%] right-5 shadow-xl rounded-xl p-1 bg-slate-800"
                src={phone}
                alt="app on phone"
              />
            )}
          </div>
        </div>
      </SlideIn>
    </>
  );
}
