import Image from "next/image";
import { SlideIn } from "../animation/SlideIn";
import Link from "next/link";
import { handleScroll } from "../navbar/NavButtons";

export default function Hero() {
  return (
    <div className="w-screen text-gray-600 bg-gradient-to-b from-blue-400 h-[90vh] flex pt-[15vh] pb-[10vh] px-[5%] md:px-[12%] lg:px-[20%]">
      <div className="flex max-w-[80%] font-medium m-auto lg:flex-row flex-col gap-8">
        <div className="my-auto flex flex-col gap-6">
          <div className="relative">
            <SlideIn>
              <p>Hello. My name is</p>
            </SlideIn>
            <div className="text-5xl text-gray-800 animate-fade-in">
              NGUYEN Jérôme
            </div>
            <SlideIn>
              <div>Full-Stack Developer in Paris</div>
            </SlideIn>
          </div>
          <Link
            onClick={handleScroll}
            href="#contact"
            className="hover:animate-pulse duration-300 transition-all hover:scale-105 border p-3 border-black text-xl text-center hover:cursor-pointer"
          >
            HIRE ME
          </Link>
        </div>
        <div>
          <SlideIn from={"right"}>
            <div className="shadow-xl relative lg:w-[30vw] lg:h-[30vw] w-[37vh] h-[37vh] rounded-full overflow-hidden">
              <Image
                priority={true}
                fill
                sizes="(max-width: 768px) 70vw, (max-width: 1200px) 50vw, 30vw"
                src="/me.jpg"
                alt="picture of the developer"
              />
            </div>
          </SlideIn>
        </div>
      </div>
    </div>
  );
}
