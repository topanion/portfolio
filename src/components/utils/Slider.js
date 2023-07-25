import Image from "next/image";

export default function Slider({ image }) {
  return (
    <div className="relative inline-flex items-center justify-center w-full h-full">
      <Image
        src={image}
        fill
        sizes="(max-width: 768px) 70vw, (max-width: 1200px) 50vw, 30vw"
        className="shadow-xl"
        objectFit="contain"
        alt={"display example for " + image}
      />{" "}
    </div>
  );
}
