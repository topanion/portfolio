import { factText } from "@/content/about/me";
import Fact from "./Fact";

export default function Desc() {
  return (
    <>
      <div className="">{factText}</div>
      <div className=" col-span-3  w-full grid lg:grid-cols-4 grid-cols-2 gap-6">
        <Fact title={"Intuitive"} src="/icons/intuitive.png">
          Easy to use, intuitive UX/UI.
        </Fact>
        <Fact title={"Responsive"} src="/icons/responsive.png" from="right">
          Will work on any device no matter the screen size.
        </Fact>
        <Fact title={"Dynamic"} src="/icons/rocket.png">
          Your page can be static, but does it have to ?
        </Fact>
        <Fact title={"Fast"} src="/icons/fast.png" from="right">
          Fast load times, high speed interactions.
        </Fact>
      </div>
    </>
  );
}
