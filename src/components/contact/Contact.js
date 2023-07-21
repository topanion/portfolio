import CenteredTitle from "../CenteredTitle";
import ContactButton from "./ContactButton";

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex min-h-[50vh] w-screen  px-[5%]  md:px-[12%] lg:px-[20%]"
    >
      <div className="m-auto flex flex-col gap-6">
        <CenteredTitle addedClassname={"text-black"}>CONTACT</CenteredTitle>
        {/* <form>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
  </form> */}
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
