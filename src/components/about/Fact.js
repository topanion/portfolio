import { FadeIn } from "../animation/FadeIn";
import Image from "next/image";
import { SlideIn } from "../animation/SlideIn";

export default function Fact({ title, children, src, from }) {
  return (
    <SlideIn from={from}>
      <div className="flex flex-col gap-3 items-center">
        <div className="rounded-full p-3 border border-slate-600 w-fit h-auto">
          <Image src={src} width={24} height={24} alt={src} />
        </div>
        <FadeIn>
          <div className="text-2xl font-semibold">{title}</div>
        </FadeIn>
        <FadeIn>
          <div className="lg:text-sm text-xs text-gray-700">
            <p>{children}</p>
          </div>
        </FadeIn>
      </div>
    </SlideIn>
  );
}
