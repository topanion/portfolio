import CenteredTitle from "../CenteredTitle";

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex w-screen bg-gradient-to-b from-pink-200 px-[5%]  md:px-[12%] lg:px-[20%] text-white"
    >
      <div className="m-auto flex flex-col gap-6">
        <CenteredTitle addedClassname={"my-6 font-bold text-black"}>
          Contact me
        </CenteredTitle>
        <form>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
        </form>
      </div>
    </div>
  );
}
