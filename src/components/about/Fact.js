import { FadeIn } from "../animation/FadeIn";
import { StretchIn } from "../animation/StretchIn";

export default function Fact({ title, children }) {
  return (
    <div className="flex flex-col gap-3 items-center">
      <div className="rounded-full p-3 border w-fit h-auto"></div>
      <FadeIn>
        <div className="text-2xl font-semibold">{title}</div>
      </FadeIn>
      <FadeIn>
        <div className="lg:text-sm text-xs text-gray-700">
          <p>{children}</p>
        </div>
      </FadeIn>
    </div>
  );
}
