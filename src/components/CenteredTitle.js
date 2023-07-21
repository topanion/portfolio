import { FadeIn } from "./animation/FadeIn";

export default function CenteredTitle({ children, addedClassname }) {
  return (
    <div className="w-full flex">
      <FadeIn addedClass={"mx-auto"}>
        <div
          className={`mx-auto border-b-2 border-black pb-1 ${addedClassname} `}
        >
          <p className={`text-3xl`}>{children}</p>
        </div>
      </FadeIn>
    </div>
  );
}
