import CenteredTitle from "../CenteredTitle";
import { StretchIn } from "../animation/StretchIn";
import Desc from "./Desc";
import { useState } from "react";
import Me from "./Me";
import Levels from "./Levels";

export default function About() {
  const [current, setCurrent] = useState(1);

  return (
    <div
      id="about"
      className="bg-white w-screen py-[10vh] px-[5%] md:px-[12%] lg:px-[20%] flex flex-col gap-6"
    >
      <CenteredTitle addedClassname={"font-bold"}>ABOUT</CenteredTitle>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
        <Me />
        <Levels />
      </div>
      <Desc />
    </div>
  );
}
