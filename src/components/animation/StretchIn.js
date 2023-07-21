import { useState, useEffect, useRef } from "react";

export function StretchIn({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      className={`h-full transition-all duration-1000 ${
        isVisible ? "w-full" : "w-0"
      }`}
    >
      {children}
    </div>
  );
}
