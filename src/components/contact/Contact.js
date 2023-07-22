import CenteredTitle from "../CenteredTitle";
import ContactButton from "./ContactButton";

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex bg-gray-700 text-white
       min-h-[50vh] w-screen py-7  px-[5%]  md:px-[12%] lg:px-[20%]"
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
        </form>
        <div className="flex md:flex-row flex-col gap-1 md:gap-6">
          <ContactButton
            src="https://instagram.com/cailloumagique"
            name="Instagram"
          />
          <ContactButton src="mailto:nj-cs@hotmail.fr" name="Mail" />

          <ContactButton src="https://github.com/topanion" name="Github" />
        </div>
      </div>
    </div>
  );
}
