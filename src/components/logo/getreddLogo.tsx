// components/AnimatedBrand.tsx
import { useEffect, useState } from "react";
import classNames from "classnames";

export default function AnimatedBrand({ dark = false }: { dark?: boolean }) {
  const [hovered, setHovered] = useState(false);
  const [showConsulting, setShowConsulting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConsulting(true);
    }, 1000); // Initial delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <span
      className={classNames(
        "relative inline-block text-xl lg:text-2xl font-semibold tracking-tight group",
        dark ? "text-white" : "text-red-900"
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      GetRedd
      {/* Sliding Consulting text */}
      <span
        className={classNames(
          "absolute left-0 top-0 text-red-500 text-lg font-light transition-all duration-500 ease-in-out",
          showConsulting ? "opacity-100" : "opacity-0",
          hovered ? "translate-x-0" : "-translate-x-full"
        )}
      >
        Consulting
      </span>
    </span>
  );
}
