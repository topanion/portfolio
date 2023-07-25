import Image from "next/image";

export default function Slider({ image }) {
  return (
    <div className="relative inline-flex items-center justify-center w-full h-full">
      <Image
        src={image}
        fill
        className="shadow-xl"
        objectFit="contain"
        alt={"display example for " + image}
      />{" "}
    </div>
  );
}
