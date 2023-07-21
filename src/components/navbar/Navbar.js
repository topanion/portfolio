import { useState, useEffect } from "react";
import Image from "next/image";
import NavButtons from "./NavButtons";
import Link from "next/link";

export default function Navbar({}) {
  const [whiteBg, setWhiteBg] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Function on scroll
  // checks if at top
  // closes navbar if open on md/sm screens
  const onScroll = () => {
    const { scrollY } = window;
    if (scrollY === 0) setWhiteBg(false);
    else if (scrollY != 0) {
      setWhiteBg(true);
    }
    setIsOpen(false);
  };

  // Set a listener for scroll to work
  useEffect(() => {
    if (!whiteBg && !isOpen) onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className="z-40 font-semibold fixed top-0 w-screen h-[8vh] px-[5%] md:px-[12%] lg:px-[20%] flex">
        {/* Background color that appears when not at the top of the page */}
        <div
          className={`absolute top-0 right-0 bg-white h-full z-30 
        transition-all duration-500 shadow-md
        ${whiteBg || isOpen ? "w-full" : "w-0"}`}
        ></div>

        {/* Navbar itself */}
        <div className="z-40 grow flex flew-row justify-between items-center">
          {/* Logo*/}
          <Link href="#">
            <Image
              width="60"
              height="60"
              src="/logo.png"
              alt="nguyen jerome logo"
            />
          </Link>
          {/* MD and SM screens */}

          <div
            className="lg:hidden hover:cursor-pointer"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <svg width="24" height="24">
              <path
                d={`${
                  !isOpen ? "M5 6h14M5 12h14M5 18h14" : "M6 18L18 6M6 6L18 18"
                }`}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
          {/* LG Screen*/}

          <div className="max-lg:hidden flex flex-row gap-6">
            {" "}
            <NavButtons onClick={() => setIsOpen(false)} />
          </div>
        </div>
      </nav>
      {/* Navbar menu when opened on MD/SM screen*/}

      <div
        className={`z-50 lg:hidden transition-all duration-500 ${
          isOpen ? "left-0" : "-left-[100vw]"
        } fixed top-[8vh] bg-white h-screen  `}
      >
        <div className="w-screen flex flex-col gap-10 px-[7%] py-3">
          <NavButtons onClick={() => setIsOpen(false)} />
        </div>
      </div>
    </>
  );
}
