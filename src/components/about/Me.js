import { FadeIn } from "../animation/FadeIn";

export default function Me() {
  return (
    <div className="">
      <FadeIn>
        <p className="pb-6">
          My name is NGUYEN Jérôme. I'm a fullstack freelance developer based in
          Paris.
          <br />
        </p>
      </FadeIn>
      <FadeIn>
        <p>
          I'm a self taught React/Next developer and absolutely love spending
          hours to build web applications and websites.
        </p>
      </FadeIn>
    </div>
  );
}
