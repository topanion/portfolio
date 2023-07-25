// Building a carousel that should use only React, JS and Tailwind CSS (well, and CSS)

import { useState, useEffect } from "react";
import Slider from "./Slider";
import SlideButtons from "./SlideButtons";

export default function Carousel({ gallery }) {
  const [index, setIndex] = useState(0);

  const sliders = gallery?.map((e) => {
    return <Slider image={e} key={"image with source " + e} />;
  });

  const onSlide = (value) => {
    const newIndex = index + value;

    if (newIndex < 0 || newIndex > gallery?.length - 1) return;
    setIndex(newIndex);
  };

  return (
    <div className="rounded-xl relative overflow-hidden w-full h-full bg-gradient-to-b to-white from-orange-300">
      <SlideButtons onSlide={onSlide} />
      <div
        className="whitespace-nowrap transform-all duration-500 h-full w-full"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {sliders}
      </div>
    </div>
  );
}
