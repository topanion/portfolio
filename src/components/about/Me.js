import { FadeIn } from "../animation/FadeIn";
import { myDescription } from "@/content/about/me";

export default function Me() {
  return (
    <div className="flex flex-col gap-4 text-sm">
      {myDescription.map((e, i) => {
        return (
          <FadeIn key={"description part " + i}>
            <p>
              {e}
              <br />
            </p>
          </FadeIn>
        );
      })}
    </div>
  );
}
