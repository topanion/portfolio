import { useState, useEffect, useRef } from "react";

export function SlideIn({ children, from = "left" }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const side = {
    left: { pos: "-left-5", trans: "translate-x-5" },
    right: { pos: "left-5", trans: "-translate-x-5" },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      className={`h-full w-full relative ${side[from].pos} ${
        isVisible
          ? `opacity-100 transition-all ${side[from].trans} duration-1000`
          : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
