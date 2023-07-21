import Image from "next/image";
import { useState } from "react";

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
      className={`animate-fade-in fixed z-50 top-0 left-0 w-screen h-screen bg-black/90 flex`}
      onClick={close}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="m-auto rounded-xl bg-white flex flex-col p-4 max-w-[90vw]"
      >
        {/* 
        <div className="overflow-hidden overflow-x-scroll w-full rounded-t-xl">
         <div
            id={title + "carrousel"}
            className="flex flex-row flex-nowrap w-fit h-full"
          >
            {gallery && (
              <>
                {gallery.map((e, i) => {
                  return (
                    <div
                      id={"title" + "i"}
                      key={"picture of " + title + " number " + i}
                      className="relative h-[50vh] md:w-[50vw] w-[90vw] bg-gray-800"
                    >
                      <Image src={e} fill objectFit="cover" />
                    </div>
                  );
                })}
              </>
            )}
          </div>
            </div>*/}
        <div className="flex flex-col gap-6 w-full p-5 text-black">
          <div className="w-full justify-center flex text-2xl">
            <p className="border-b-2 border-black w-fit">{title}</p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="">{description}</div>
            <div className="">
              <p className="font-semibold">Development Tools :</p>
              {tools?.map((e, i) => {
                return (
                  <p key={"tools" + title + i} className="py-1">
                    · {e}
                  </p>
                );
              })}
            </div>
            {link && (
              <div className="grow flex justify-center">
                <a
                  className="p-3 border border-black"
                  href={link}
                  target="_blank"
                >
                  See the app
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
