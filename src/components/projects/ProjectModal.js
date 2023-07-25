import Image from "next/image";
import { useState } from "react";
import Carousel from "../utils/Carousel";

export default function ProjectModal({
  title,
  gallery,
  description,
  close,
  tools,
  link,
}) {
  return (
    <div
      className="fixed top-0 left-0 w-screen min-h-screen bg-black/40 flex z-50 pb-2"
      onClick={close}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-in m-auto p-1 rounded-xl bg-slate-700 text-slate-700 flex md:flex-row flex-col gap-2 max-md:w-[90vw] w-[80vw] md:min-h-[80vh] max-md:max-h-[90vh] max-md:pb-1"
      >
        {gallery && (
          <div className="flex flex-col justify-between md:max-w-[50%] md:grow w-full max-md:h-[70vh] max-md:gap-4">
            <div className="h-[90%]">
              <Carousel gallery={gallery} />
            </div>

            <div className="grow flex justify-center items-center gap-3">
              {link && (
                <a
                  className="p-2 text-sm shadow-xl w-fit h-fit text-white bg-blue-400/80 hover:bg-blue-400"
                  href={link}
                  target="_blank"
                >
                  See the app
                </a>
              )}
              <button
                onClick={() => close()}
                className="p-2 text-sm shadow-xl w-fit h-fit text-white bg-slate-500/80 hover:bg-slate-600"
                target="_blank"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <div className="bg-slate-600 grow text-white rounded-xl flex flex-col gap-6 max-md:text-sm p-5 max-md:overflow-scroll max-md:border-t">
          <div className="w-full justify-center flex md:text-2xl text-xl">
            <p className=" w-fit">{title}</p>
          </div>
          <div className="">{description}</div>
          <div className="">
            <p className="font-semibold">Development Tools :</p>
            {tools?.map((e, i) => {
              return (
                <p key={"tools" + title + i} className="">
                  · {e}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
