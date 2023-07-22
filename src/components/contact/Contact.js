import CenteredTitle from "../CenteredTitle";
import ContactButton from "./ContactButton";

export default function Contact() {
  return (
    <>
      <div className="bg-gray-700">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 102"
          height="10vh"
          width="100%"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0 L50 100 L100 0 Z"
            fill="#93c5fd"
            stroke="#93c5fd"
          ></path>
        </svg>
      </div>
      <div
        id="contact"
        className="flex bg-gray-700 text-white
       min-h-[50vh] w-screen py-5 px-[5%]  md:px-[12%] lg:px-[20%]"
      >
        <div className="m-auto flex flex-col gap-6 w-full items-center">
          <CenteredTitle addedClassname={"border-white"}>CONTACT</CenteredTitle>
          <form className="flex flex-col gap-1 w-[80%] text-gray-300">
            <input
              className="p-2 rounded-md bg-gray-800 "
              type="text"
              placeholder="Name"
            />
            <input
              className="p-2 rounded-md bg-gray-800 "
              type="text"
              placeholder="Email"
            />
            <textarea
              className="p-2 rounded-md bg-gray-800 text-sm "
              placeholder="Your message..."
            />
            <div className="w-full flex justify-end mt-1">
              <div className="p-3 border hover:cursor-pointer w-fit">
                Submit
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        className="flex flex-col gap-3 bg-slate-800 text-white
       w-screen py-5 px-[5%]  md:px-[12%] lg:px-[20%] border-t border-white"
      >
        <div className="w-full flex flex-row gap-1 md:gap-6 justify-center">
          <ContactButton
            src="https://instagram.com/cailloumagique"
            name="Instagram"
          />
          <ContactButton src="mailto:nj-cs@hotmail.fr" name="Mail" />

          <ContactButton src="https://github.com/topanion" name="Github" />
        </div>
        <div className="text-center text-slate-600 font-light">
          NGUYEN Jérôme <span className="text-red-700/60">©2023</span>
        </div>
      </div>
    </>
  );
}
